import React from 'react';
import {View, ScrollView, Text, Image, Button, Alert, StyleSheet} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {THEME} from "../theme";
import {AppHeaderIcon} from "../components/AppHeaderIcon";
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import {removePost, toggleBooked} from "../store/actions/post";
import {useNavigation, useRoute} from "@react-navigation/native";

export const PostScreen = ({}) => {

  const navigation = useNavigation();
  const route = useRoute();

  const {postId} = route.params;
  const dispatch = useDispatch();
  const post = useSelector(
    state => state.post.allPosts.find(({id}) => id === postId),
    (prevPost, currentPost) => prevPost.booked !== currentPost.booked
  );

  if (!post) {
    return null
  }

  navigation.setOptions({headerTitle: post.title});

  navigation.setOptions({
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={AppHeaderIcon} title='isBooked'>
        <Item
          title='Take photo'
          iconName={post.booked ? "ios-star" : 'ios-star-outline'}
          onPress={() => dispatch(toggleBooked(post.id))}
        />
      </HeaderButtons>
    ),
  });

  const removeHandler = () => {
    Alert.alert(
      'Remove post',
      'Are you sure?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Remove',
          style: 'destructive',
          onPress: () => {
            navigation.goBack();
            dispatch(removePost(post.id))
          }
        },
      ],
      {cancelable: false},
    );
  };

  return (
    <ScrollView style={styles.wrap}>
      <Image source={{url: post.img}} style={styles.image}/>
      <View style={styles.textWrap}>
        <Text style={styles.title}>
          {post.text}
        </Text>
        <Text style={styles.date}>Create: <Text style={styles.bold}>{new Date(post.date).toLocaleDateString()}</Text></Text>
      </View>
      <Button title="Delete" onPress={() => removeHandler()} color={THEME.DANGER_COLOR}/>
    </ScrollView>
  )
};

const styles = StyleSheet.create({
  wrap: {
    paddingBottom: 10,
  },
  image: {
    width: '100%',
    height: 200
  },
  textWrap: {
    padding: 10,
  },
  title: {
    fontFamily: THEME.REGULAT_FONT
  },
  date: {
    marginTop: 5
  },
  bold: {
    fontFamily: THEME.BOLD_FONT
  }
});