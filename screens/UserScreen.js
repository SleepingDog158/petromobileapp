import React, { Component, useContext } from "react";
import { Text, View, StyleSheet } from "react-native";
import QRCode from "react-native-qrcode-svg";
import { Header } from "react-native-elements";
import UserContext from "../contexts/dataContext";

export const QR = () => {
  const user = useContext(UserContext);
  return (
    <View>
      <Header
        style={{ height: 200 }}
        statusBarProps={{
          barStyle: "light-content",
          backgroundColor: "#2c6fb2",
        }}
        containerStyle={{
          backgroundColor: "#2c6fb2",
        }}
        centerComponent={
          <Text
            style={{
              fontSize: 25,
              color: "#FFF",
              fontFamily: "Roboto",
              fontWeight: "bold",
            }}
          >
            Thông tin cá nhân
          </Text>
        }
      />
      
      <View style={styles.container}>
        <QRCode size={350} value={toString(user.userId)} />
        <Text  style={{fontWeight:'bold', fontSize:17, fontFamily:'Roboto', marginTop:8 }}>{user.name}</Text>
        <Text  style={{fontWeight:'bold', fontSize:17, fontFamily:'Roboto' }}>{user.clientname}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical:30,
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
