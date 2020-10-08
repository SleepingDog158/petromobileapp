import * as React from "react";
import { Text, View, Image, FlatList } from "react-native";
import { Header } from "react-native-elements";
import { createStackNavigator } from "@react-navigation/stack";
import Logo from "../assets/Logo.png";
const Stack = createStackNavigator();

function HomeScreen() {
  return (
    <View >
      <Text>a</Text>
    </View>
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
    <Stack.Navigator >
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
