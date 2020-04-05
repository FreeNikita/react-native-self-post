import React from 'react';
import {Platform} from "react-native";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {Ionicons} from '@expo/vector-icons'

import {MainScreen} from "../screens/MainSrceen";
import {PostScreen} from "../screens/PostScreen";
import {BookedScreen} from "../screens/BookedScreen";
import {CreateScreen} from "../screens/CreateScreen";
import {AboutScreen} from "../screens/AboutScreen";

import {configAndroid, configIos} from "./config";

const Stack = createStackNavigator();
const isAndroid = Platform.OS === 'android';
const Tab = isAndroid ? createMaterialBottomTabNavigator() : createBottomTabNavigator();

function PostsScreens() {
  const {screenOptions} = isAndroid ? configAndroid : configIos;
  return (
    <Stack.Navigator initialRouteName="BookedScreen" screenOptions={screenOptions}>
      <Stack.Screen name="MainScreen" component={MainScreen}/>
      <Stack.Screen name="PostScreen" component={PostScreen}/>
    </Stack.Navigator>
  )
}

function BookedPostsScreens() {
  const {screenOptions} = isAndroid ? configAndroid : configIos;
  return (
    <Stack.Navigator initialRouteName="BookedScreen" screenOptions={screenOptions}>
      <Stack.Screen name="BookedScreen" component={BookedScreen}/>
      <Stack.Screen name="PostScreen" component={PostScreen}/>
    </Stack.Navigator>
  )
}

export function AppNavigation() {
  const {navigatorOption} = isAndroid ? configAndroid : configIos;

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({color}) => (
            <Ionicons size={25} color={color} name={route.name === 'Post' ? "ios-albums" : "ios-star"}/>),
        })}
        {...navigatorOption}
      >
        <Tab.Screen name="Post" component={PostsScreens}/>
        <Tab.Screen name="Favorite" component={BookedPostsScreens}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}