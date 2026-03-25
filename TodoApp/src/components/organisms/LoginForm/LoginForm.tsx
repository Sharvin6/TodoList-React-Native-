import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/RootStackParams';
import FormField from '../../molecules/FormField/FormField';
import Button from '../../atoms/Button/Button';

type LoginFormProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Login'>;
};

export default function LoginForm({ navigation }: LoginFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isEmailValid = /\S+@\S+\.\S+/.test(email);
  const isFormValid = email && isEmailValid && password;

  const handleLogin = () => {
    navigation.navigate('Home'); 
  };

  return (
    <View style={styles.container}>
      <FormField label="Email" value={email} onChangeText={setEmail} />
      <FormField label="Password" value={password} onChangeText={setPassword} />
      <Button title="Login" onPress={handleLogin}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});