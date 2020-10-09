import React, { Component, useContext } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import useDataUser from "../customHook/useDataUser";
import BillListItems from "../components/BillList";
const Stack = createStackNavigator();

function BillScreen({ navigation }) {
  const { bill } = useDataUser();
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <FlatList
        contentContainerStyle={{ paddingBottom: 40 }}
        style={styles.container}
        data={bill}
        renderItem={({ item }) => (
          <BillListItems
            bill={item}
            onPress={() =>
              navigation.navigate("BillDetail", {
                id: item.id,
                otherParams: {
                  contractCode: item.contractCode,
                  transactionDate: item.transactionDate,
                  station: item.station,
                  product: item.product,
                  quantity: item.quantity,
                  total: item.total,
                },
              })
            }
          />
        )}
        keyExtractor={(item) => `${item.id}`}
      />
    </View>
  );
}

function BillDetail({ route, navigation }) {
  const { id, otherParams } = route.params;
  return (
    <View style={{ flex: 1, backgroundColor: "white", paddingTop: 16 }}>
      <View style={styles.content}>
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>Mã hóa đơn:</Text>
        <Text style={{ fontSize: 20, textAlign: "right" }}>{id}</Text>
      </View>
      <View style={styles.content}>
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>Mã hợp đồng:</Text>
        <Text style={{ fontSize: 20, textAlign: "right" }}>
          {otherParams.contractCode}
        </Text>
      </View>
      <View style={styles.content}>
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>Cửa hàng:</Text>
        <Text style={{ fontSize: 20, textAlign: "right" }}>
          {otherParams.station}
        </Text>
      </View>
      <View style={styles.content}>
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>Ngày giao dịch:</Text>
        <Text style={{ fontSize: 20, textAlign: "right" }}>
          {otherParams.transactionDate}
        </Text>
      </View>
      <View style={styles.content}>
      <Text style={{ fontWeight: "bold", fontSize: 20 }}>Số lượng:</Text>
      <Text style={{ fontSize: 20, textAlign: "right" }}>
          {otherParams.quantity}
        </Text>
      </View>
      <View style={styles.content}>
      <Text style={{ fontWeight: "bold", fontSize: 20 }}>Thành tiền:</Text>
      <Text style={{ fontSize: 20, textAlign: "right" }}>
          {otherParams.total}
        </Text>
      </View>
    </View>
  );
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
          headerRight: () => <View />,
        }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 10,
    paddingBottom: 20,
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 8,
    elevation: 8,
  },
});
