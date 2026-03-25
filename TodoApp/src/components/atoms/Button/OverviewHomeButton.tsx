import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

type ButtonProps = {
  title: string;
  onPress: () => void;
}

export default function OverviewHomeButton({ title, onPress }: ButtonProps) {
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
    backgroundColor: '#ffffff',
    padding: 5,
    borderRadius: 30,
    height: 60,
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  text: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 30,
  },
});

