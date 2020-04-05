import React from 'react';
import { Platform } from "react-native";
import { HeaderButton} from "react-navigation-header-buttons";
import { Ionicons } from '@expo/vector-icons'
import {THEME} from "../theme";

export const AppHeaderIcon = props => (
  <HeaderButton
    {...props}
    iconSize={32}
    IconComponent={Ionicons}
    color={ Platform.OS === 'android' ? THEME.WHITE_COLOR : THEME.MAIN_COLOR }
  />
);