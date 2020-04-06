import {THEME} from "../theme";
import {Platform} from "react-native";

export const isAndroid = Platform.OS === 'android';

export const configIos = {
  navigatorOption: {
    tabBarOptions: {
      activeTintColor: THEME.MAIN_COLOR
    }
  },
  screenOptions: {
    headerStyle: {
      backgroundColor: THEME.WHITE_COLOR,
    },
    headerTintColor: THEME.MAIN_COLOR,
  }
};

export const configAndroid = {
  navigatorOption: {
    activeColor: THEME.WHITE_COLOR,
    shifting: true,
    barStyle: {
      backgroundColor: THEME.MAIN_COLOR,
    }
  },
  screenOptions: {
    headerStyle: {
      backgroundColor: THEME.MAIN_COLOR,
    },
    headerTintColor: THEME.WHITE_COLOR
  }
};

export const configDrawer = {
  activeTintColor: THEME.MAIN_COLOR,
  labelStyle: {
    fontFamily: THEME.BOLD_FONT
  },
  label: '123'
};