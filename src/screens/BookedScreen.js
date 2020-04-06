import React from 'react';
import {DATA} from "../data";
import {Posts} from "../components/Posts";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import {AppHeaderIcon} from "../components/AppHeaderIcon";
import {useNavigation} from "@react-navigation/native";

export const BookedScreen = () => {
  const navigation = useNavigation();
  const posts = DATA.filter(post => post.booked);

  navigation.setOptions({
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={AppHeaderIcon} title='Take photo'>
        <Item
          title='Take photo'
          iconName='ios-camera'
          onPress={() => console.log('Press photo')}
        />
      </HeaderButtons>
    ),
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={AppHeaderIcon} title='Open menu'>
        <Item
          title='Open menu'
          iconName='ios-menu'
          onPress={navigation.openDrawer}
        />
      </HeaderButtons>
    ),
    title: "Favorite post"
  });

  return <Posts posts={posts} navigation={navigation} />
};