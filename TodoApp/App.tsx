if (__DEV__) {
  require("./ReactotronConfig");
}

import React, { useReducer } from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './src/screens/LoginScreen';
import { RootStackParamList } from './src/navigation/RootStackParams';
import HomeScreen from './src/screens/HomeScreen';
import TodoListScreen from './src/screens/TodolistScreen';
import { TodoProvider } from './src/context/TodoContext';
import OverviewScreen from './src/screens/OverviewScreen';
import HooksPracticeScreen from './src/screens/HooksPracticeScreen';
import ReducerScreen from './src/screens/useReducerScreen';
import ReduxScreen from './src/screens/ReduxPracticeScreen';
import { Provider } from 'react-redux';
import { store } from './src/redux/store/store';
import "./ReactotronConfig";
import PracticeScreen from './src/screens/PracticeScreen';
import AxiosScreen from './src/screens/AxiosScreen';
import AxiosThunkScreen from './src/screens/AxiosThunkScreen';
import RTKQueryScreen from './src/screens/RTKQueryScreen';
import TempResultScreen from './src/screens/TempResultScreen';
//import PostScreen from './src/screens/PostScreen';


const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Provider store={store}>
      <TodoProvider>
        <SafeAreaProvider>
          <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="TODO" component={TodoListScreen} />
              <Stack.Screen name="Overview" component={OverviewScreen} />
              <Stack.Screen name="Hooks" component={HooksPracticeScreen} />
              <Stack.Screen name="useReducer" component={ReducerScreen} />
              <Stack.Screen name="Redux" component={ReduxScreen} />
              <Stack.Screen name="Practice" component={PracticeScreen} />
              <Stack.Screen name="Axios" component={AxiosScreen} />
              <Stack.Screen name="AxiosThunk" component={AxiosThunkScreen} />
              <Stack.Screen name="RTKQuery" component={RTKQueryScreen} />
              <Stack.Screen name="TempResult" component={TempResultScreen} />
              {/* <Stack.Screen name="PostScreen" component={PostScreen} /> */}


            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaProvider>
      </TodoProvider>
    </Provider>
  );
}