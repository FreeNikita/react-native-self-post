import React from 'react';
import {View, Text, StyleSheet} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import {AppHeaderIcon} from "../components/AppHeaderIcon";
import {THEME} from "../theme";

export const AboutScreen = () => {

  const navigation = useNavigation();

  navigation.setOptions({

    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={AppHeaderIcon} title='Open menu'>
        <Item
          title='Open menu'
          iconName='ios-menu'
          onPress={navigation.openDrawer}
        />
      </HeaderButtons>
    ),
    title: "About"
  });

  return (
    <View style={styles.center}>
      <Text>This is my second Application on React Native</Text>
      <Text>Version <Text style={styles.version}>1.0.0</Text>
      </Text>
    </View>
  )
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  version: {
    fontFamily: THEME.BOLD_FONT,
    fontSize: 16
  }
});