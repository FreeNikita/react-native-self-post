import React from "react";
import {TabsPostScreens} from "./TabNavigation";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {AboutScreen, CreatePostScreen} from "./StackNavigation";

const Drawer = createDrawerNavigator();

export function DrawerNavigation() {

  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="HomeMenu" component={TabsPostScreens} />
      <Drawer.Screen name="CreatePostMenu" component={CreatePostScreen} />
      <Drawer.Screen name="AboutMenu" component={AboutScreen} />
    </Drawer.Navigator>
  )
}