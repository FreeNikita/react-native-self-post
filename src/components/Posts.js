import React from 'react';
import {View, StyleSheet, FlatList} from "react-native";
import {Post} from "../components/Post";
import { useNavigation } from '@react-navigation/native';

export const Posts = ({posts}) => {
  const navigation = useNavigation();

  const onPress = ({id: postId, text: title}) => {
    navigation.navigate('PostScreen', {postId, title})
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