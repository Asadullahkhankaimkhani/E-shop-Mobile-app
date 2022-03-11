import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";

const Todo = ({ name, handleDelete }) => {
  return (
    <View style={[styles.item, { margin: 8, padding: 8 }]}>
      <Text style={{ textAlign: "center" }}>{name}</Text>
      <Button title="Delete" onPress={() => handleDelete(name)} />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "whitesmoke",
  },
});

export default Todo;
