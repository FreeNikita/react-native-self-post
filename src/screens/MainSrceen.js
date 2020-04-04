import React from 'react';
import {View, StyleSheet, FlatList } from "react-native";
import {DATA} from "../data";
import {Post} from "../components/Post";

export const MainScreen = ({navigation}) => {

  const onPress = ({id, text})=> {
    navigation.navigate('PostScreen', {
      postId: id,
      title: text
    })
  };

  return (
    <View style={styles.wrapper}>
      <FlatList
        data={DATA}
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