import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useLayoutEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { RootStackParamList } from '../../../navigation/RootStackParams';
import FormField from '../../molecules/FormField/FormField';
import DateField from '../../molecules/DateField/DateField';
import Button from '../../atoms/Button/Button';
import PrioritySelect from '../../molecules/PrioritySelect/PrioritySelect';
import { useTodos } from '../../../context/TodoContext';
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type TodolistFormProps = NativeStackScreenProps<RootStackParamList, "TODO">;

export default function TodoLisdtForm({ route, navigation }: TodolistFormProps) {

  const { todo } = route.params ?? {};

  const { addTodo, editTodo } = useTodos();

  const [title, setTitle] = useState(todo?.title || "");
  const [description, setDescription] = useState(todo?.description || "");
  const [dueDate, setDueDate] = useState(
    todo?.dueDate ? new Date(todo.dueDate) : new Date()
  );
  const [priority, setPriority] = useState(todo?.priority || "Low");

  const handleSubmit = () => {

    if (todo) {
      editTodo(todo.id, {
        title,
        description,
        dueDate: dueDate.toString(),
        priority
      });
      navigation.navigate('Overview');

    } else {
      addTodo({
        title,
        description,
        dueDate: dueDate.toString(),
        priority

      });
      navigation.navigate('Home');

    }

  };

  return (


    <ScrollView contentContainerStyle={styles.container}>

      {/* Header Card */}
      <View style={styles.headerCard}>
        <Text style={styles.title}>
          {todo ? "Edit Todo ✏️" : "➕ Add New Todo"}
        </Text>
        <Text style={styles.subtitle}>
          {todo
            ? "Update your task details"
            : "Create a new task to stay organized"}
        </Text>
      </View>

      {/* Form Card */}
      <View style={styles.formCard}>

        <FormField
          label="Title"
          value={title}
          onChangeText={setTitle}
        />

        <FormField
          label="Description"
          value={description}
          onChangeText={setDescription}
        />

        <DateField
          label="Due Date"
          value={dueDate}
          onChangeDate={setDueDate}
        />

        <PrioritySelect
          value={priority}
          onChange={setPriority}
        />

        <View style={styles.buttonContainer}>
          <Button
            title={todo ? "Update Todo" : "Create Todo"}
            onPress={handleSubmit}
          />
        </View>

      </View>

    </ScrollView>

  );
}

const styles = StyleSheet.create({

  container: {
    padding: 5,
    backgroundColor: "#F0F4FF",
    flexGrow: 1
  },

  headerCard: {
    backgroundColor: "#4F46E5",
    padding: 20,
    borderRadius: 16,
    marginBottom: 20
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#FFFFFF"
  },

  subtitle: {
    fontSize: 14,
    color: "#E0E7FF",
    marginTop: 4
  },

  formCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 20,
    elevation: 4
  },

  buttonContainer: {
    marginTop: 20
  }

});