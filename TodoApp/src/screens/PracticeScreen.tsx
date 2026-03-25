import React from "react";

import {
  View,
  Text,
  StyleSheet,
  ScrollView
} from "react-native";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/RootStackParams";
import Button from "../components/atoms/Button/Button";

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, "Practice">;
};

export default function PracticeScreen({ navigation }: Props) {

  return (
    <ScrollView contentContainerStyle={styles.scrollContent}>
      <View style={styles.container}>

        <Text style={styles.title}>Practice Screen</Text>


        <Button title="Hooks" onPress={() => navigation.navigate('Hooks')}></Button>

        <Button title="useReducer" onPress={() => navigation.navigate('useReducer')}></Button>

        <Button title="Redux" onPress={() => navigation.navigate('Redux')} />

        <Button title="Axios" onPress={() => navigation.navigate('Axios')} />

        <Button title="AxiosThunk" onPress={() => navigation.navigate('AxiosThunk')} />

        <Button title="RTKQuery" onPress={() => navigation.navigate('RTKQuery')} />

      </View>
    </ScrollView>

  )
}

const styles = StyleSheet.create({

  scrollContent: {
    flexGrow: 1,
  },

  container: {
    flex: 1,
    padding: 20,
    //gap: 5,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10
  },

  section: {
    fontSize: 18,
    marginTop: 20,
    marginBottom: 10
  },

  input: {
    borderWidth: 1,
    padding: 10,
    marginVertical: 10
  },

  row: {
    marginVertical: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15
  },

  todoItem: {
    padding: 10,
    borderBottomWidth: 1
  },

  buttonStyle: { marginVertical: 20, marginBottom: 20 },
  label: {},
  stepper: { flexDirection: 'row', marginVertical: 10 },
  button: {
    backgroundColor: "#007bff",
    height: 40,
    width: 40,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',

  },
  buttonText: { color: 'white', fontSize: 30 },
  counter: { width: 80, alignItems: 'center' },
  count: { fontSize: 25 },
  prev: { fontSize: 15, color: 'grey' },
});