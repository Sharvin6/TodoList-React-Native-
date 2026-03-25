import React, {
  useState,
  useEffect,
  useContext,
  useRef,
  useReducer
} from "react";

import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from "react-native";

//import { TodoContext } from "../context/TodoContext";
import PracticeForm from "../components/organisms/Practice/Practice";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/RootStackParams";
import Button from "../components/atoms/Button/Button";

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, "Hooks">;
};

export default function HooksDemoScreen({ navigation }: Props) {

  /* =========================
     useContext
     Access global todos
  ========================= */
  //const { todos, addTodo } = useContext(TodoContext)!;

  /* =========================
     useState
     Manage input field
  ========================= */
  // const [title, setTitle] = useState("");
  // const [desc, setDesc] = useState("");

  /* =========================
     useRef
     Focus input + store previous count
  ========================= */
  const passwordRef = useRef<TextInput>(null);
  const [count, setCount] = useState(0);
  const prevCount = useRef(0);

  {/*useEffect(() => {
    passwordRef.current?.focus();
  })*/}

  useEffect(() => {
    prevCount.current = count;
  }, [count]);

  return (
    <ScrollView contentContainerStyle={styles.scrollContent}>
      <View style={styles.container}>

        <Text style={styles.title}>Hooks Demo Screen</Text>

        <TextInput
          ref={passwordRef}
          style={styles.input}
          placeholder="Password"
        >
        </TextInput>

        <Text>Current count: {count}</Text>
        <Text>Previous count: {prevCount.current}</Text>
        <Button title="Increase" onPress={() => setCount(count + 1)} />
        <Button title="Descrease" onPress={() => setCount(count - 1)} />
        <Button title="Reset" onPress={() => setCount(0)} />

        <Text style={styles.label}>Stepper Example</Text>

        <View style={styles.stepper}>
          <TouchableOpacity style={styles.button} onPress={() => setCount(count - 1)}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>

          <View style={styles.counter}>
            <Text style={styles.count}>{count}</Text>
            <Text style={styles.prev}>Prev: {prevCount.current}</Text>
          </View>

          <TouchableOpacity style={styles.button} onPress={() => setCount(count + 1)}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>

        {/* practice */}

        <PracticeForm
          title="aac"
          description="sad"
          action={() => navigation.navigate('Home')}>
        </PracticeForm>

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