import {configAndroid, configIos, isAndroid} from "./config";
import {Ionicons} from "@expo/vector-icons";
import {BookedPostsScreens, PostsScreens} from "./StackNavigation";
import React from "react";
import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

const Tab = isAndroid ? createMaterialBottomTabNavigator() : createBottomTabNavigator();


export function TabsPostScreens() {
  const {navigatorOption} = isAndroid ? configAndroid : configIos;

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => (
          <Ionicons size={25} color={color} name={route.name === 'Post' ? "ios-albums" : "ios-star"}/>),
      })}
      {...navigatorOption}
    >
      <Tab.Screen name="PostsTab" component={PostsScreens}/>
      <Tab.Screen name="FavoritePostsTab" component={BookedPostsScreens}/>
    </Tab.Navigator>
  )
}
