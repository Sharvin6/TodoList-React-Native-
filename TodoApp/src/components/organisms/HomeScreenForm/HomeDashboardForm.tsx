import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../../atoms/Button/Button';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/RootStackParams';

type HomeDashboardFormProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
}

export default function HomeDashboardForm({ navigation }: HomeDashboardFormProps) {

  const handleOverview = () => {
    navigation.navigate('Overview');
  }
  const handleTODO = () => {
    navigation.navigate('TODO', { 'todo': undefined });
  }

  const handleHooks = () => {
    navigation.navigate('Practice');
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome To ToDoApp !!</Text>
      <Button title="Overview" onPress={handleOverview} />
      <Button title="Add ToDo" onPress={handleTODO} />
      <Button title="Practice" onPress={handleHooks} />
      <Text style={styles.footerText}>By Sharvin Selvaraj</Text>
    </View>
  )

}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'flex-start', alignItems: 'center' },
  title: { fontSize: 30, fontWeight: 'bold', marginVertical: 50, marginBottom: 50 },
  footerText: {
    fontSize: 16,
    position: 'absolute',
    bottom: 20,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: 'gray',
  }
});