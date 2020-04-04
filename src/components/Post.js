import React from 'react';
import { View, ImageBackground, Text, StyleSheet } from "react-native";
import {THEME} from "../theme";

export const Post = ({post}) => {
  return (
    <View style={styles.post}>
      <ImageBackground source={{url: post.img}} style={styles.image}>
        <View style={styles.textWrap}>
          <Text style={styles.title}>
            {new Date(post.date).toLocaleDateString()}
          </Text>
        </View>
      </ImageBackground>
    </View>
  )
};

const styles = StyleSheet.create({
  post: {
    marginBottom: 15,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
  },
  textWrap: {
    width: '100%',
    paddingVertical: 5,
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  title: {
    color: THEME.WHITE_COLOR,
    fontFamily: THEME.REGULAT_FONT
  }
});