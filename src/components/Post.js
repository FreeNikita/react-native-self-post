import React from 'react';
import {View, ImageBackground, Text, StyleSheet, TouchableOpacity} from "react-native";
import {THEME} from "../theme";

export const Post = ({post, onOpen}) => {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={() => onOpen(post)}>
      <View style={styles.post}>
        <ImageBackground source={{url: post.img}} style={styles.image}>
          <View style={styles.textWrap}>
            <Text style={styles.title}>
              {post.title}
            </Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
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