import {configAndroid, configIos, isAndroid} from "./config";
import {MainScreen} from "../screens/MainSrceen";
import {PostScreen} from "../screens/PostScreen";
import {BookedScreen} from "../screens/BookedScreen";
import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {AboutScreen as AboutScreenPage } from "../screens/AboutScreen";
import {CreateScreen} from "../screens/CreateScreen";

const Stack = createStackNavigator();

export function PostsScreens() {
  const {screenOptions} = isAndroid ? configAndroid : configIos;
  return (
    <Stack.Navigator initialRouteName="BookedScreen" screenOptions={screenOptions}>
      <Stack.Screen name="MainScreen" component={MainScreen}/>
      <Stack.Screen name="PostScreen" component={PostScreen}/>
    </Stack.Navigator>
  )
}

export function BookedPostsScreens() {
  const {screenOptions} = isAndroid ? configAndroid : configIos;
  return (
    <Stack.Navigator initialRouteName="BookedScreen" screenOptions={screenOptions}>
      <Stack.Screen name="BookedScreen" component={BookedScreen}/>
      <Stack.Screen name="PostScreen" component={PostScreen}/>
    </Stack.Navigator>
  )
}

export function AboutScreen() {
  const {screenOptions} = isAndroid ? configAndroid : configIos;
  return (
    <Stack.Navigator initialRouteName="BookedScreen" screenOptions={screenOptions}>
      <Stack.Screen name="AboutScreen" component={AboutScreenPage}/>
    </Stack.Navigator>
  )
}

export function CreatePostScreen() {
  const {screenOptions} = isAndroid ? configAndroid : configIos;
  return (
    <Stack.Navigator initialRouteName="BookedScreen" screenOptions={screenOptions}>
      <Stack.Screen name="CreateScreen" component={CreateScreen}/>
    </Stack.Navigator>
  )
}