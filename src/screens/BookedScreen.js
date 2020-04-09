import React, {useEffect} from 'react';
import {Posts} from "../components/Posts";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import {AppHeaderIcon} from "../components/AppHeaderIcon";
import {useNavigation} from "@react-navigation/native";
import {useDispatch, useSelector} from "react-redux";
import {loadPost} from "../store/actions/post";
import {Loading} from "../components/AppLoading";

export const BookedScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const allPost = useSelector(state => state.post.bookPosts);
  const isLoading = useSelector(state => state.post.loading);

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

  useEffect(() => {
    dispatch(loadPost())
  }, [dispatch]);

  if(isLoading) return <Loading/>;

  return <Posts posts={allPost} navigation={navigation} />
};