import React from 'react';
import {View, Text, StyleSheet} from "react-native";
import {useNavigation, useRoute} from "@react-navigation/native";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import {AppHeaderIcon} from "../components/AppHeaderIcon";

export const CreateScreen = () => {
  const navigation = useNavigation();

  const route = useRoute();

  console.log(route)

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
    title: "Create Post"
  });

  return (
    <View style={styles.center}>
      <Text>
        CreateScreen
      </Text>
    </View>
  )
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});