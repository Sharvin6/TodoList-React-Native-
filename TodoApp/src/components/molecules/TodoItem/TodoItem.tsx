import React from "react";
import { View, Text, StyleSheet } from "react-native";
import OverviewButton from "../../atoms/Button/OverviewButton";

type TodoItemProps = {
  title: string;
  description: string;
  dueDate: string;
  priority: "High" | "Low";
  completed: boolean;
  onComplete: () => void;
  onDelete: () => void;
  onEdit: () => void;
};

export default function TodoItem({
  title,
  description,
  dueDate,
  priority,
  completed,
  onComplete,
  onDelete,
  onEdit,
}: TodoItemProps) {
  return (
    <View
      style={[
        styles.container,
        {
          borderColor: priority === "High" ? "#FF4D4D" : "#1fe226",
          opacity: completed ? 0.5 : 1,
        },
      ]}
    >
      {/* Title */}
      <Text
        style={[
          styles.title,
          completed && { textDecorationLine: "line-through" },
        ]}
      >
        {title}
      </Text>
      {/* Description */}
      <Text style={styles.description}>{description}</Text>

      {/* Due date */}
      <Text style={styles.dueDate}>
        Due: {new Date(dueDate).toDateString()}
      </Text>

      {/* Priority */}
      <Text style={styles.priority}>Priority: {priority}</Text>

      {/* Buttons */}
      <View style={styles.buttonRow}>
        <OverviewButton
          title={completed ? "Undo" : "Complete"}
          onPress={onComplete}
        />

        <OverviewButton
          title="Delete"
          onPress={onDelete}
        />

        <OverviewButton
          title="Edit"
          onPress={onEdit}>

        </OverviewButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 3,
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
  },

  description: {
    marginTop: 5,
  },

  dueDate: {
    marginTop: 5,
    fontWeight: "bold",
  },

  priority: {
    marginTop: 5,
    fontWeight: "bold",
  },

  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
});