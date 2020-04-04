import React from 'react';
import { Platform } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { MainScreen } from "../screens/MainSrceen";
import { PostScreen } from "../screens/PostScreen";
import { AboutScreen } from "../screens/AboutScreen";
import { BookedScreen } from "../screens/BookedScreen";
import { CreateScreen } from "../screens/CreateScreen";

import {THEME} from "../theme";

const Stack = createStackNavigator();

const screenOptionsIOS = {
  headerStyle: {
    backgroundColor: THEME.WHITE_COLOR,
  },
  headerTintColor: THEME.MAIN_COLOR
};

const screenOptionsAndroid = {
  headerStyle: {
    backgroundColor: THEME.MAIN_COLOR,
  },
  headerTintColor: THEME.WHITE_COLOR
};

export function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="MainScreen"
        screenOptions={Platform.OS === 'android' ? screenOptionsAndroid : screenOptionsIOS}>
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen
          name="PostScreen"
          component={PostScreen}
          options={({ route }) => ({ title: route.params.title })}
        />
        <Stack.Screen name="AboutScreen" component={AboutScreen} />
        <Stack.Screen name="BookedScreen" component={BookedScreen} />
        <Stack.Screen name="CreateScreen" component={CreateScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}