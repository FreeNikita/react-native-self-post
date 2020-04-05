import React from 'react';
import {Platform} from "react-native";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {MainScreen} from "../screens/MainSrceen";
import {PostScreen} from "../screens/PostScreen";
import {AboutScreen} from "../screens/AboutScreen";
import {BookedScreen} from "../screens/BookedScreen";
import {CreateScreen} from "../screens/CreateScreen";

import { screenOptionsIOS, screenOptionsAndroid } from "../theme";

const Stack = createStackNavigator();

export function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="MainScreen"
        screenOptions={Platform.OS === 'android' ? screenOptionsAndroid : screenOptionsIOS}
      >
        <Stack.Screen name="MainScreen" component={MainScreen}/>
        <Stack.Screen name="PostScreen" component={PostScreen}/>
        <Stack.Screen name="AboutScreen" component={AboutScreen}/>
        <Stack.Screen name="BookedScreen" component={BookedScreen}/>
        <Stack.Screen name="CreateScreen" component={CreateScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}