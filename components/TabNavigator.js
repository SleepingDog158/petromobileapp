import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5 } from "@expo/vector-icons";
import { HomeScreen } from "../screens/HomeScreen";
import {QR} from "../screens/QR";

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
              size = focused ? 35 : 30;
            } else if (route.name === "QR") {
              iconName = "qrcode";
              size = focused ? 35 : 30;
            } else if (route.name === "Bản đồ") {
              iconName = focused ? "map-marked" : "map-marked-alt";
              size = focused ? 35 : 30;
            } else if (route.name === "Giao dịch") {
              iconName = focused ? "receipt" : "receipt";
              size = focused ? 35 : 30;
            } else if (route.name === "Tài khoản") {
              iconName = focused ? "user-alt" : "user";
              size = focused ? 35 : 30;
            }

            // You can return any component that you like here!
            return <FontAwesome5 name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          style: {
            height: 60,
          },
          activeTintColor: "#2c6fb2",
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen name="Trang chủ" component={HomeScreen} />
        <Tab.Screen name="Bản đồ" component={MapScreen} />
        <Tab.Screen name="QR" component={QR} />
        <Tab.Screen name="Giao dịch" component={QR} />
        <Tab.Screen name="Tài khoản" component={QR} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
