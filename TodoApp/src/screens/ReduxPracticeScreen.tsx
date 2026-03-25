import React, { useState } from "react";
import { View, Text, TextInput, Button, FlatList, StyleSheet, TouchableOpacity, ActivityIndicator } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../redux/store/store";
import { startLoading, increment, addTodo, toggleTodo, deleteTodo } from "../redux/CreateSlice/todoSlice";
import { IncrementAsync, Reset } from "../redux/thunk/thunk";


export default function ReduxScreen() {
  const [newTodo, setNewTodo] = useState("");
  //useSelector: when data change, it notice and automatically
  // re-renders component
  const todos = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch<AppDispatch>();

  const handleAdd = () => {
    dispatch(addTodo(newTodo));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Redux Todo App 📝</Text>
      <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Thunk Practice</Text>


      {/* Input Section */}
      <Text style={{ fontSize: 16 }}>Count: {todos.count}</Text>
      <Button title="Increase" onPress={() => dispatch(IncrementAsync())}></Button>

      {todos.loading1 && <ActivityIndicator size={"small"}></ActivityIndicator>}

      <Button title="Reset" onPress={() => dispatch(Reset())}></Button>
      {todos.loading2 && <ActivityIndicator size={"small"}></ActivityIndicator>}

      <View style={styles.divider}></View>

      <Text style={{ fontWeight: 'bold', fontSize: 20, marginVertical: 10 }}>Redux Store Practice</Text>


      <View style={styles.inputRow}>

        <TextInput
          style={styles.input}
          placeholder="Enter new todo"
          value={newTodo}
          onChangeText={setNewTodo}
        />
        <Button title="Add" onPress={handleAdd} />
      </View>

      {/* Todo List */}
      <FlatList
        data={todos.items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={[styles.todoCard, item.completed && { backgroundColor: "#d3ffd3" }]}>
            <Text style={[styles.todoText, item.completed && { textDecorationLine: "line-through" }]}>
              {item.title}
            </Text>
            <View style={styles.buttonRow}>
              <TouchableOpacity
                style={[styles.button, { backgroundColor: "#4CAF50" }]}
                onPress={() => dispatch(toggleTodo(item.id))}
              >
                <Text style={styles.btnText}>{item.completed ? "Undo" : "Complete"}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, { backgroundColor: "#FF4D4D" }]}
                onPress={() => dispatch(deleteTodo(item.id))}
              >
                <Text style={styles.btnText}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        style={{ marginTop: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#f2f2f2" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 15, textAlign: "center" },
  inputRow: { flexDirection: "row", marginBottom: 20 },
  input: { flex: 1, borderWidth: 1, borderColor: "#ccc", borderRadius: 10, paddingHorizontal: 10, marginRight: 10 },
  todoCard: { padding: 15, borderRadius: 8, backgroundColor: "#fff", marginBottom: 10 },
  todoText: { fontSize: 16, fontWeight: "bold" },
  buttonRow: { flexDirection: "row", justifyContent: "flex-end", marginTop: 10 },
  button: { padding: 8, borderRadius: 6, marginLeft: 10 },
  btnText: { color: "#fff", fontWeight: "bold" },
  divider: { marginVertical: 10, borderBottomColor: 'black', borderBottomWidth: 2 },
});