import React from 'react';
import {View, StyleSheet, FlatList} from "react-native";
import {Post} from "../components/Post";

import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import {AppHeaderIcon} from "../components/AppHeaderIcon";

export const Posts = ({navigation, posts}) => {

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
          onPress={() => console.log('Open menu')}
        />
      </HeaderButtons>
    ),
    title: "All post"
  });

  const onPress = ({id, text}) => {
    navigation.navigate('PostScreen', {
      postId: id,
      title: text
    })
  };

  return (
    <View style={styles.wrapper}>
      <FlatList
        data={posts}
        keyExtractor={(post) => post.id.toString()}
        renderItem={({item}) => <Post post={item} onOpen={onPress}/>}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
  }
});