import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5 } from "@expo/vector-icons";
import { HomeStack } from "../screens/HomeScreen";
import { QRStack } from "../screens/QR";
import { BillStack } from "../screens/Bills";

import UserStack from "../screens/UserScreen";
const Tab = createBottomTabNavigator();

function MapScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

export default function TabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Trang chủ") {
              iconName = "home";
              size = focused ? 40 : 30;
            } else if (route.name === "QR") {
              iconName = "qrcode";
              size = focused ? 45 : 38;
            } else if (route.name === "Bản đồ") {
              iconName = focused ? "map-marked" : "map-marked-alt";
              size = focused ? 40 : 30;
            } else if (route.name === "Giao dịch") {
              iconName = focused ? "receipt" : "receipt";
              size = focused ? 40 : 30;
            } else if (route.name === "Tài khoản") {
              iconName = focused ? "user-alt" : "user";
              size = focused ? 40 : 30;
            }

            return (
              <View style={route.name === "QR" && [styles.QRIcon, focused && styles.QRIconFocused]}>
                <FontAwesome5 name={iconName} size={size} color={color} />
              </View>
            );
          },
        })}
        tabBarOptions={{
          style: {
            height: 60,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            backgroundColor: "#2c6fb2"
          
          },
          activeTintColor: "white",
          inactiveTintColor: "white",
        }}
      >
        <Tab.Screen name="Trang chủ" component={HomeStack} />
        <Tab.Screen name="Bản đồ" component={MapScreen} />
        <Tab.Screen name="QR" component={QRStack} />
        <Tab.Screen name="Giao dịch" component={BillStack} />
        <Tab.Screen name="Tài khoản" component={UserStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  QRIcon: {
    position: "absolute",
    top: -30,
    elevation: 6,
    backgroundColor: "#2c6fb2",
    width: 72,
    height: 72,
    borderRadius: 36,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "white"
  },
  QRIconFocused:{
    borderColor: 'white'
  }
});
