import {THEME} from "../theme";

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