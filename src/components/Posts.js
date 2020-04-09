import React from 'react';
import {View, StyleSheet, FlatList, Text} from "react-native";
import {Post} from "../components/Post";
import { useNavigation } from '@react-navigation/native';
import {THEME} from "../theme";

export const Posts = ({posts = []}) => {
  const navigation = useNavigation();

  const onPress = ({id: postId, text: title}) => {
    navigation.navigate('PostScreen', {postId, title})
  };

  return (
    <View style={styles.wrapper}>
      {!posts.length && <Text style={styles.noItems}>List is empty</Text>}
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
  },
  noItems: {
    fontFamily: THEME.BOLD_FONT,
    marginVertical: 10,
    textAlign: 'center',
    fontSize: 18
  }
});