import React, { Component, useContext } from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { Avatar, Accessory, Icon } from "react-native-elements";
// import UserContext from "../customHook/useDataUser";
import useDataUser from "../customHook/useDataUser";
function UserScreen() {
  const { user } = useDataUser();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Avatar
        size="xlarge"
        rounded
        icon={{ name: "user", type: "font-awesome" }}
        source={{
          uri: user.avatar,
        }}
        containerStyle={{ elevation: 1 }}
      >
        <Accessory
          size="30"
          style={{ height: 50, width: 50, borderRadius: 50 }}
        />
      </Avatar>
    </View>
  );
}

const Stack = createStackNavigator();

function UserStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={UserScreen}
        options={{
          headerTitle: "Thông tin tài khoản",
          headerStyle: { backgroundColor: "#2c6fb2" },
          headerTitleStyle: {
            color: "#FFF",
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 24,
          },
        }}
      />
    </Stack.Navigator>
  );
}

export default UserStack;
