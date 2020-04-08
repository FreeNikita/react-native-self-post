import React, {useState} from 'react';
import {ScrollView, View, TouchableWithoutFeedback, Text, TextInput, Image, Button, Keyboard, StyleSheet} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {useDispatch} from "react-redux";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import {AppHeaderIcon} from "../components/AppHeaderIcon";
import {THEME} from "../theme";
import {addPost} from "../store/actions/post";

export const CreateScreen = () => {
  const navigation = useNavigation();
  const [text, setTest] = useState('');
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const savePost = () => {
    const post = {
      date: new Date().toJSON(),
      img: "https://static.coindesk.com/wp-content/uploads/2019/01/shutterstock_1012724596-860x430.jpg",
      booked: false,
      text,
      title,
    };
    dispatch(addPost(post));
    navigation.navigate("HomeMenu");
  };

  navigation.setOptions({
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={AppHeaderIcon} title='Open menu'>
        <Item
          title='Open menu'
          iconName='ios-menu'
          onPress={navigation.openDrawer}
        />
      </HeaderButtons>
    ),
    title: "Create Post"
  });

  return (
    <ScrollView style={styles.wrap}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.wrap}>
          <Text style={styles.title}>Create new Post</Text>
          <TextInput
            style={styles.textArea}
            placeholder="Enter title..."
            multiline
            value={title}
            onChangeText={setTitle}
          />
          <TextInput
            style={styles.textArea}
            placeholder="Enter text..."
            multiline
            value={text}
            onChangeText={setTest}
          />
          <Image style={styles.image}
                 source={{uri: "https://static.coindesk.com/wp-content/uploads/2019/01/shutterstock_1012724596-860x430.jpg"}}/>
          <Button title={"Create post"} onPress={savePost}/>
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  )
};

const styles = StyleSheet.create({
  wrap: {
    padding: 10
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: THEME.BOLD_FONT,
    marginVertical: 10,
  },
  textArea: {
    padding: 10,
    marginBottom: 10,
    borderBottomColor: THEME.MAIN_COLOR,
    borderBottomWidth: 1,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 10
  }
});