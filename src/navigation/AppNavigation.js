import React from 'react';
import {Platform} from "react-native";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Ionicons} from '@expo/vector-icons'

import {MainScreen} from "../screens/MainSrceen";
import {PostScreen} from "../screens/PostScreen";
import {BookedScreen} from "../screens/BookedScreen";
import {CreateScreen} from "../screens/CreateScreen";
import {AboutScreen} from "../screens/AboutScreen";

import {screenOptionsIOS, screenOptionsAndroid, THEME} from "../theme";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function PostsScreens() {
  return (
    <Stack.Navigator
        initialRouteName="MainScreen"
        screenOptions={Platform.OS === 'android' ? screenOptionsAndroid : screenOptionsIOS}
      >
        <Stack.Screen name="MainScreen" component={MainScreen}/>
        <Stack.Screen name="PostScreen" component={PostScreen}/>
      </Stack.Navigator>
  )
}

export function AppNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({ color}) => (
            <Ionicons size={25} color={color}
                      name={route.name === 'MainScreen' ? "ios-albums" : "ios-star"}
            />
          ),
        })}
        tabBarOptions={{
          activeTintColor: THEME.MAIN_COLOR
        }}
      >
        <Tab.Screen name="Post" component={PostsScreens}/>
        <Tab.Screen name="Favorite" component={BookedScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}