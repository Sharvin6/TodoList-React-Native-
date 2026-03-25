import React from 'react';
import { View, StyleSheet } from 'react-native';
import { RootStackParamList } from '../navigation/RootStackParams';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import TodoListForm from '../components/organisms/TodoList/TodoListForm';
import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import OverviewForm from '../components/organisms/OverviewForm/OverviewForm';

type Props = NativeStackScreenProps<RootStackParamList, 'Overview'>;

export default function OverviewScreen({ navigation }: Props) {

  return (
    <View style={styles.container}>
      <OverviewForm navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAF4FF',
  },
});
