import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";
import { useTodos } from "../../../context/TodoContext";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../navigation/RootStackParams";

import StatBox from "../../atoms/StatBox/StatBox";
import TodoItem from "../../molecules/TodoItem/TodoItem";
import OverviewHomeButton from "../../atoms/Button/OverviewHomeButton";

type OverviewProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, "Overview">;
};

export default function Overview({ navigation }: OverviewProps) {

  const { todos, deleteTodo, toggleComplete } = useTodos();

  const completedTodos = todos.filter((t) => t.completed);
  const activeTodos = todos.filter((t) => !t.completed);

  const normalCount = activeTodos.filter(
    (t) => t.priority !== "High"
  ).length;

  const urgentCount = activeTodos.filter(
    (t) => t.priority === "High"
  ).length;

  /*
  SORT TODOS
  1. High priority first
  2. Nearest due date first
  */
  const sortedTodos = [...todos].sort((a, b) => {

    if (a.priority !== b.priority) {
      return a.priority === "High" ? -1 : 1;
    }

    const dateA = new Date(a.dueDate).getTime();
    const dateB = new Date(b.dueDate).getTime();

    return dateA - dateB;
  });

  return (

    <FlatList
      data={sortedTodos}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.container}

      ListHeaderComponent={
        <>
          {/* Header Card */}


          <View style={styles.headerCard}>
            <View>
              <Text style={styles.title}>Overview 📊</Text>
              <Text style={styles.subtitle}>Track your task progress</Text>
            </View>
            <View style={styles.button}>
              <OverviewHomeButton title="⌂" onPress={() => { navigation.navigate('Home') }} >
              </OverviewHomeButton>
            </View>
          </View>

          {/* Stats Card */}
          <View style={styles.statsCard}>
            <View style={styles.statsRow}>
              <StatBox label="Total Todos" value={todos.length} />
              <StatBox label="Completed" value={completedTodos.length} />
            </View>

            <View style={styles.statsRow}>
              <StatBox label="Urgent" value={urgentCount} />
              <StatBox label="Normal" value={normalCount} />
            </View>
          </View>

          {/* Todo List Title */}
          <Text style={styles.todoTitle}>Your Tasks</Text>
        </>
      }

      renderItem={({ item }) => (
        <TodoItem
          title={item.title}
          description={item.description}
          dueDate={item.dueDate}
          priority={item.priority}
          completed={item.completed}
          onComplete={() => toggleComplete(item.id)}
          onDelete={() => deleteTodo(item.id)}
          onEdit={() => navigation.navigate("TODO", { todo: item })}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({

  container: {
    padding: 20,
    backgroundColor: "#F0F4FF",

  },

  headerCard: {
    backgroundColor: "#4F46E5",
    padding: 20,
    borderRadius: 16,
    marginBottom: 20,
    flexDirection: "row",

  },

  button: {
    alignSelf: 'flex-end',
    marginLeft: 100,
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#FFFFFF",
  },

  subtitle: {
    fontSize: 14,
    color: "#E0E7FF",
    marginTop: 4,
  },

  statsCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 15,
    marginBottom: 20,
    elevation: 4,
  },

  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },

  todoTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#374151",
  },

});