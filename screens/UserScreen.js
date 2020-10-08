import React, { Component, useContext } from "react";
import { View, Text, ScrollView } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { Avatar, Accessory, Button, Input } from "react-native-elements";
import { FontAwesome5 } from "@expo/vector-icons";
// import UserContext from "../customHook/useDataUser";
import useDataUser from "../customHook/useDataUser";
function UserScreen({ navigation }) {
  const { user } = useDataUser();
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ flex: 1 }}>
        <View
          style={{ alignItems: "center", marginHorizontal: 25, marginBottom: 15, marginTop: 20 }}
        >
          <Avatar
            size={90}
            rounded
            icon={{ name: "user", type: "font-awesome" }}
            source={{
              uri: user?.avatar,
            }}
            containerStyle={{
              elevation: 1,
              borderWidth: 3,
              borderColor: "#2c6fb2",
            }}
          >
            <Accessory
              size={20}
              style={{ height: 30, width: 30, borderRadius: 50 }}
            />
          </Avatar>
          <View style={{ marginLeft: 8 }}>
            <Text style={{ fontSize: 24, fontWeight: "bold" }}>
              {user?.name}
            </Text>
            <Text style={{ fontStyle: "italic", fontSize: 17, color: "gray", alignSelf: "center" }}>
              {user?.code}
            </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            borderBottomColor: "#D3D3D3",
            borderBottomWidth: 1,
            marginHorizontal: 24,
            marginBottom: 10,
          }}
        >
          <FontAwesome5 name="address-card" size={26} color="grey" />
          <Text style={{ fontSize: 20, marginLeft: 16, marginBottom: 4 }}>
            {user?.residentID}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            borderBottomColor: "#D3D3D3",
            borderBottomWidth: 1,
            marginHorizontal: 24,
            marginBottom: 10,
          }}
        >
          <FontAwesome5 name="home" size={26} color="grey" />
          <Text style={{ fontSize: 20, marginLeft: 16, marginBottom: 4 }}>
            {user?.address}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            borderBottomColor: "#D3D3D3",
            borderBottomWidth: 1,
            marginHorizontal: 24,
            marginBottom: 10,
          }}
        >
          <FontAwesome5 name="building" size={26} color="grey" />
          <Text style={{ fontSize: 20, marginLeft: 16, marginBottom: 4 }}>
            {user?.clientname}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            borderBottomColor: "#D3D3D3",
            borderBottomWidth: 1,
            marginHorizontal: 24,
            marginBottom: 10,
          }}
        >
          <FontAwesome5 name="phone" size={26} color="grey" />
          <Text style={{ fontSize: 20, marginLeft: 16, marginBottom: 4 }}>
            {user?.phone}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            borderBottomColor: "#D3D3D3",
            borderBottomWidth: 1,
            marginHorizontal: 24,
            marginBottom: 10,
          }}
        >
          <FontAwesome5 name="car" size={26} color="grey" />
          <Text style={{ fontSize: 20, marginLeft: 16, marginBottom: 4 }}>
            {user?.plate}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            borderBottomColor: "#D3D3D3",
            borderBottomWidth: 1,
            marginHorizontal: 24,
            marginBottom: 10,
          }}
        >
          <FontAwesome5 name="file-contract" size={26} color="grey" />
          <Text style={{ fontSize: 20, marginLeft: 16, marginBottom: 4 }}>
            {user?.contractCode}
          </Text>
        </View>
        
        <Button
          title="Đổi mật khẩu"
          raised
          type="outline"
          containerStyle={{ marginHorizontal: 101 }}
          titleStyle={{ fontSize: 20 }}
          buttonStyle={{ borderRadius:20, borderWidth: 2 }}
          onPress={() => navigation.navigate("PassChange")}
        />
        <Button
          title="Đăng xuất"
          raised
          containerStyle={{marginTop: 16, marginBottom:40, marginHorizontal: 100 }}
          titleStyle={{ fontSize: 20 }}
          color="danger"
          buttonStyle={{ backgroundColor: "#dc3545", borderRadius: 20 }}
        />
        
      </View>
    </View>
  );
}

function PassChange({ navigation }) {
  return (
    <View style={{ flex:1, backgroundColor: "white"}}>
    <View style={{ margin: 32 }}>
      <Input
        // secureTextEntry="true"
        label="Mật khẩu hiện tại"
        leftIcon={<FontAwesome5 name="lock" size={24} color="grey" />}
      />
      <Input
        label="Mật khẩu mới"
        // secureTextEntry="true"
        leftIcon={<FontAwesome5 name="lock" size={24} color="grey" />}
      />
      <Input
        // secureTextEntry="true"
        label="Nhập lại mật khẩu mới"
        leftIcon={<FontAwesome5 name="lock" size={24} color="grey" />}
      />
      <Button
        title="Xác nhận"
        raised
        containerStyle={{ marginVertical: 16, marginHorizontal: 32 }}
        titleStyle={{ fontSize: 20 }}
        color="danger"
        buttonStyle={{ backgroundColor: "#2c6fb2" }}
        onPress={() => navigation.goBack()}
      />
    </View>
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
      <Stack.Screen
        name="PassChange"
        component={PassChange}
        options={{
          headerTitle: "Thay đổi mật khẩu",
          headerStyle: { backgroundColor: "#2c6fb2" },
          headerTitleStyle: {
            color: "#FFF",
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 24,
          },
          headerRight: () => <View />,
        }}
      />
    </Stack.Navigator>
  );
}

export default UserStack;
