import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

type FormFieldProps = {
  label?: string;
  value: string;
  onChangeText: (text: string) => void;
};

export default function FormField({ label, value, onChangeText }: FormFieldProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}> {label} </Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: { marginVertical: 10 },
  label: { fontWeight: 'bold', marginBottom: 4 },
  input: { borderWidth: 1, padding: 10, borderRadius: 6 },
});
