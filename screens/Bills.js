import React, { Component, useContext } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import useDataUser from "../customHook/useDataUser";
import BillListItems from "../components/BillList";
const Stack = createStackNavigator();

function BillScreen({navigation}) {
    const { bill } = useDataUser();
  return (
    <View style={{flex:1, backgroundColor: "white"}}>
      <FlatList
      contentContainerStyle={{paddingBottom:40}}
        style={styles.container}
        data={bill}
        renderItem={({ item }) => (
          <BillListItems
            bill={item}
            onPress={() =>
                navigation.navigate('BillDetail', {
                    
                  })
              }
            
          />
        )}
        keyExtractor={(item) => `${item.id}`}
      />
    </View>
  );
}

function BillDetail(){
    return(
        <Text>
            a
        </Text>
    )
}


export const BillStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Bill"
        component={BillScreen}
        options={{
          headerTitle: "Lịch sử giao dịch",
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
        name="BillDetail"
        component={BillDetail}
        options={{
          headerTitle: "Chi tiết giao dịch",
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
        flexGrow:1,
      paddingLeft: 8,
      paddingRight: 8,
      paddingTop: 10,
      paddingBottom:20
    },
  });
  