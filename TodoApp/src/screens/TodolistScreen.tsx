import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RootStackParamList } from '../navigation/RootStackParams';
import TodoListForm from '../components/organisms/TodoList/TodoListForm';

type TodolistScreenProps = NativeStackScreenProps<RootStackParamList, 'TODO'>;

export default function TodoListScreen({ navigation, route }: TodolistScreenProps) {
  return (
    <View style={styles.container}>
      <TodoListForm navigation={navigation} route={route} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#EAF4FF',

  },
});