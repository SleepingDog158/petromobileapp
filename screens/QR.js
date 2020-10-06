import React, { Component, useContext } from "react";
import { Text, View, StyleSheet } from "react-native";
import QRCode from "react-native-qrcode-svg";
import { createStackNavigator } from "@react-navigation/stack";
import useDataUser from "../customHook/useDataUser";
const Stack = createStackNavigator();

function QRScreen() {
  const { user } = useDataUser();
  return (
    <View>
      <Text
        style={{
          marginVertical: 16,
          alignSelf: "center",
          fontSize: 17,
          fontFamily: "Roboto",
        }}
      >
        Sử dụng mã này để khởi tạo hóa đơn
      </Text>

      {user && (
        <View style={styles.container}>
          <QRCode size={350} value={toString(user.userId)} />
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 17,
              fontFamily: "Roboto",
              marginTop: 8,
            }}
          >
            {user.name}
          </Text>
          <Text
            style={{ fontWeight: "bold", fontSize: 17, fontFamily: "Roboto" }}
          >
            {user.clientname}
          </Text>
        </View>
      )}
    </View>
  );
}

export const QRStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="QRScreen"
        component={QRScreen}
        options={{
          headerTitle: "Mã QR",
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
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 8,
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 4,
    marginBottom: 16,
  },
});
