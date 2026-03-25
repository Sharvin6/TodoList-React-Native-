import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import LoginForm from '../components/organisms/LoginForm/LoginForm';
import { RootStackParamList } from '../navigation/RootStackParams';


type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

export default function LoginScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <LoginForm navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'center',
    padding: 20,
  },
});