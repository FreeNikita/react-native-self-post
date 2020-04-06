import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {DrawerNavigation} from "./DrawerNavigation";

export function AppNavigation() {
  return (
    <NavigationContainer>
      <DrawerNavigation/>
    </NavigationContainer>
  );
}