import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import Todo from "./Todo";

const TodoList = () => {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);

  const addItem = () => {
    const updatedList = list;
    updatedList.push(text);
    setList(updatedList);
    setText("");
  };

  const deleteItem = (index) => {
    const updatedList = list.filter((todo) => todo !== index);
    setList(updatedList);
  };

  return (
    <View style={{ width: "80%", marginBottom: 60 }}>
      <Text style={[styles.align, styles.font]}>{"Todo App List"}</Text>
      <ScrollView>
        {list.map((x, index) => (
          <Todo name={x} key={index} handleDelete={deleteItem} />
        ))}
      </ScrollView>
      <View>
        <TextInput
          style={styles.input}
          value={text}
          onChangeText={(e) => setText(e)}
        />
        <Button title="Add Item" onPress={addItem} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  align: {
    alignSelf: "center",
  },
  font: {
    fontSize: 20,
    fontWeight: "bold",
  },
  input: {
    borderRadius: 5,
    borderWidth: 1,
    marginBottom: 8,
    padding: 8,
  },
});

export default TodoList;
