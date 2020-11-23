import React, { useEffect, useState } from "react";
import { Text, View, Image, Dimensions, StyleSheet } from "react-native";
import { PieChart } from "react-native-chart-kit";
import { createStackNavigator } from "@react-navigation/stack";
import Logo from "../assets/Logo.png";
import { ScrollView } from "react-native-gesture-handler";
import useDataUser from "../customHook/useDataUser";
const Stack = createStackNavigator();

function HomeScreen() {
  const { user, contract } = useDataUser();

  let data = [
    {
      name: "Còn lại",
      population: user?.creditRemain,
      color: "#2583D0",
    },
    {
      name: "Đã sử dụng",
      population: user?.creditLimit - user?.creditRemain,
      color: "#E15554",
    },
  ];
  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <Text
        style={{
          alignSelf: "center",
          fontSize: 26,
          fontWeight: "bold",
          marginTop: 8,
        }}
      >
        Thống kê mức sử dụng công nợ
      </Text>
      <Text style={{ alignSelf: "center", fontSize: 18, fontStyle: "italic" }}>
        Mã hợp đồng: {user?.contractCode}
      </Text>
      <Text style={{ alignSelf: "center", fontSize: 18, fontStyle: "italic" }}>
        Ngày có hiệu lực: {contract?.startDate}
      </Text>
      <Text style={{ alignSelf: "center", fontSize: 18, fontStyle: "italic" }}>
        Ngày kết thúc: {contract?.expiredDate}
      </Text>
      <View style={{ flexDirection: "row", alignSelf: "center", marginTop: 8 }}>
        <Text style={{ fontSize: 20 }}>Hạn mức tổng: </Text>
        <Text style={{ fontSize: 20 }}>{user?.creditLimit} VNĐ</Text>
      </View>
      <View style={styles.tracker}>
        <View
          style={{ flexDirection: "column", width: "50%", borderRightWidth: 1 }}
        >
          <Text
            style={{ alignSelf: "center", fontWeight: "bold", fontSize: 24 }}
          >
            Số dư:
          </Text>
          <Text style={{ alignSelf: "center", fontSize: 20 }}>
            {user?.creditRemain} VNĐ
          </Text>
        </View>
        <View
          style={{ flexDirection: "column", width: "50%", borderLeftWidth: 1 }}
        >
          <Text
            style={{ alignSelf: "center", fontWeight: "bold", fontSize: 24 }}
          >
            Đã sử dụng:
          </Text>
          <Text style={{ alignSelf: "center", fontSize: 20 }}>
            {user?.creditLimit - user?.creditRemain} VNĐ
          </Text>
        </View>
      </View>

      <View style={{ alignItems: "center", justifyContent: "center" }}>
        {user?.creditLimit && user?.creditRemain && (
          <PieChart
            data={data}
            width={Dimensions.get("window").width}
            height={350}
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
            absolute
            hasLegend={false}
            paddingLeft="100"
          />
        )}
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
const styles = StyleSheet.create({
  tracker: {
    flexDirection: "row",

    marginHorizontal: 16,
    borderLeftColor: "#2583D0",
    borderLeftWidth: 6,
    borderRightColor: "#E15554",
    borderRightWidth: 6,
    padding: 8,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 4,
    marginTop: 16,
  },
});
