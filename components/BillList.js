import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
export default function BillListItems(props) {
  const { bill, onPress } = props;
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <FontAwesome5 name="gas-pump" size={40} color="grey" style={{marginRight:8}}/>
        <View>
          <Text style={styles.date}>{bill.transactionDate}</Text>
          <Text style={{ fontWeight: "bold", textTransform: "uppercase", fontSize: 16 }}>
            {bill.product}
          </Text>
        </View>
        <View style={{marginLeft:"auto"}}>
          <Text style={styles.date}>Mã hóa đơn: {bill.id}</Text>
          <Text style={{ fontWeight: "bold", fontSize: 15, color: "red" }}>
            {bill.total}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 8,
    marginLeft: 8,
    marginRight: 8,
    borderRadius: 4,
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
    borderLeftColor: "green",
    borderLeftWidth: 4,
  },
  date: {
    fontSize: 14,
    color: "grey",
    marginBottom: 4,
  },
});
