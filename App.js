import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TabNavigator from "./components/TabNavigator"
import {UserProvider} from "./contexts/dataContext"

export default function App() {
  const user= {
    avatar: "https://robohash.org/rerumetiure.bmp?size=50x50&set=set1",
    userId: 1234567890,
    name: "Trần Hải Dương",
    phone: "0936149167",
    clientname: "Công ty A",
    contractCode: "2020Covid19I",
    plate: "15B1-97165",
    creditLimit: 100000000,
    creditRemain: 90000000,
  }
  return (
    <UserProvider value={user}>
      <TabNavigator/>
    </UserProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
