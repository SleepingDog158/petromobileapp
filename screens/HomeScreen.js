import React, { useEffect, useState } from "react";
import { Text, View, Image, Dimensions } from "react-native";
import { PieChart } from "react-native-chart-kit";
import { createStackNavigator } from "@react-navigation/stack";
import Logo from "../assets/Logo.png";
import { ScrollView } from "react-native-gesture-handler";
import useDataUser from "../customHook/useDataUser";
const Stack = createStackNavigator();

function HomeScreen() {
  const { user } = useDataUser();
 

  let data = [
    {
      name: "Còn lại",
      population: user?.creditRemain,
      color: "rgba(54, 112, 211, 1)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "Đã sử dụng",
      population: user?.creditLimit - user?.creditRemain,
      color: "rgba(255, 84, 5, 1)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
  ];
  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <Text>Thống kê mức sử dụng công nợ</Text>
      <Text>Mã hợp đồng: {user?.contractCode}</Text>
      <View style={{ flexDirection: "row" }}>
        <Text>Hạn mức tổng:</Text>
        <Text>{user?.creditLimit} VNĐ</Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text>Hạn mức còn lại:</Text>
        <Text>{user?.creditRemain} VNĐ</Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text>Đã sử dụng:</Text>
        <Text>{user?.creditLimit - user?.creditRemain} VNĐ</Text>
      </View>
      <View>
        <PieChart
          data={data}
          width={Dimensions.get("window").width}
          height={220}
          chartConfig={{
            backgroundColor: "#1cc910",
            backgroundGradientFrom: "#eff3ff",
            backgroundGradientTo: "#efefef",
            decimalPlaces: 2,
            color: (opacity = 2) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          accessor="population"
          backgroundColor="transparent"
          paddingLeft="15"
          absolute
          hasLegend={false}
        />
      </View>
    </ScrollView>
  );
}

function LogoTitle() {
  return (
    <Image
      source={Logo}
      style={{ width: 220, alignSelf: "center" }}
      resizeMode="contain"
    />
  );
}
export const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerTitle: (props) => <LogoTitle {...props} />,
          headerStyle: { backgroundColor: "#2c6fb2" },
          headerTitleStyle: {},
        }}
      />
    </Stack.Navigator>
  );
};
