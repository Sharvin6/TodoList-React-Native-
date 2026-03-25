import React, { useReducer } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../components/atoms/Button/Button';

type State = {
  count: number;
};

type Action =
  | { type: "INCREMENT" }
  | { type: "DECREMENT" }
  | { type: 'RESET' };

const initialState = {
  count: 0
};

function reducer(state: State, action: Action) {

  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };

    case "DECREMENT":
      return { count: state.count - 1 };

    case "RESET":
      return { count: 0 };

    default:
      return state
  }
};

export default function ReducerScreen() {

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <View style={styles.container}>
      <Text style={styles.countText}>Count: {state.count}</Text>
      <Button title="Increase" onPress={() => dispatch({ type: "INCREMENT" })}></Button>
      <Button title="Decrease" onPress={() => dispatch({ type: "DECREMENT" })}></Button>
      <Button title="Reset" onPress={() => dispatch({ type: "RESET" })}></Button>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    padding: 20,
  },

  countText: {
    fontWeight: 'bold',
    fontSize: 20,
  }
})