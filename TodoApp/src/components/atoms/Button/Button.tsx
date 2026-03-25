import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

type ButtonProps = {
  title: string;
  onPress: () => void;
}

export default function Button({ title, onPress }: ButtonProps) {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}>
      <Text style={styles.text}> {title} </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 10,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
  },
});

