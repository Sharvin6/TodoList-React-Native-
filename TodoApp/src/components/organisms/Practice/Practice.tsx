import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

type PracticeProps = {
  title: string;
  description: string
  action: () => void;
};

export default function PracticeForm({ title, description, action }: PracticeProps) {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        <Text style={styles.label}>Title: </Text>
        {title}</Text>
      <Text style={styles.title}>
        <Text style={styles.label}>Description: </Text>
        {description}
      </Text>
      <TouchableOpacity style = {styles.button} onPress={action}>
        <Text style = {styles.label}>Go to Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    backgroundColor: "#83f1df",
    borderRadius: 16,
    padding: 15,
    marginBottom: 20,
    elevation: 4,
  },

  button: {
    backgroundColor: "#f183ab",
    borderRadius: 16,
    padding: 15,
    marginVertical: 20,
    marginBottom: 20,
    elevation: 4,
    alignItems: 'center',
  },

  label: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  title: {
    fontSize: 20,
    fontWeight: 'regular',
  }
});