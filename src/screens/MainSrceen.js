import React, { useEffect } from 'react';
import {Posts} from "../components/Posts";
import {useDispatch, useSelector} from "react-redux";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import {AppHeaderIcon} from "../components/AppHeaderIcon";
import {useNavigation} from "@react-navigation/native";
import {loadPost} from "../store/actions/post";

export const MainScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const allPost = useSelector(state => state.post.allPosts);

  navigation.setOptions({
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={AppHeaderIcon} title='Take photo'>
        <Item
          title='Take photo'
          iconName='ios-camera'
          onPress={() => navigation.navigate('CreatePostMenu')}
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
    title: "All post"
  });

  useEffect(() => {
    dispatch(loadPost())
  }, [dispatch]);

  return <Posts posts={allPost} navigation={navigation} />
};
