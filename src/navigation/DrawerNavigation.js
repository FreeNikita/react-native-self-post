import React from "react";
import {TabsPostScreens} from "./TabNavigation";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {AboutScreen, CreatePostScreen} from "./StackNavigation";
import {configDrawer} from "./config";

const Drawer = createDrawerNavigator();

export function DrawerNavigation() {

  return (
    <Drawer.Navigator initialRouteName="Home" drawerContentOptions={configDrawer}>
      <Drawer.Screen options={{drawerLabel: "Home"}} name="HomeMenu" component={TabsPostScreens} />
      <Drawer.Screen options={{drawerLabel: "Create Post"}} name="CreatePostMenu" component={CreatePostScreen} />
      <Drawer.Screen options={{drawerLabel: "About"}} name="AboutMenu" component={AboutScreen} />
    </Drawer.Navigator>
  )
}