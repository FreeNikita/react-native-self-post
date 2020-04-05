import React, {useLayoutEffect} from 'react';
import {View, ScrollView, Text, Image, Button, Alert, StyleSheet} from "react-native";
import {DATA} from "../data";
import {THEME} from "../theme";
import {AppHeaderIcon} from "../components/AppHeaderIcon";
import {HeaderButtons, Item} from 'react-navigation-header-buttons';

export const PostScreen = ({route, navigation}) => {
  const {postId} = route.params;

  const post = DATA.find(post => post.id === postId);
  const iconStar = post.booked ? "ios-star" : 'ios-star-outline';

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: new Date(post.date).toLocaleDateString(),
    });
  }, [navigation]);

  navigation.setOptions({
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={AppHeaderIcon} title='isBooked'>
        <Item
          title='Take photo'
          iconName={iconStar}
          onPress={() => console.log('isBooked')}
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
        {text: 'Remove', onPress: () => console.log('OK Pressed'), style: 'destructive'},
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
      </View>
      <Button title="delete" onPress={() => removeHandler()} color={THEME.DANGER_COLOR}/>
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
  }
});