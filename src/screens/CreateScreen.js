import React, {useState, useRef} from 'react';
import {ScrollView, View, TouchableWithoutFeedback, Text, TextInput, Alert, Button, Keyboard, StyleSheet} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {useDispatch} from "react-redux";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import {AppHeaderIcon} from "../components/AppHeaderIcon";
import {THEME} from "../theme";
import {addPost} from "../store/actions/post";
import {PhotoPicker} from "../components/photoPicker";

export const CreateScreen = () => {
  const navigation = useNavigation();
  const [text, setTest] = useState('');
  const [title, setTitle] = useState('');
  const imgRef = useRef();
  const dispatch = useDispatch();

  const savePost = () => {
    if(!imgRef.current){
      Alert.alert("Error", "Please upload image");
      return
    }

    const post = {
      date: new Date().toJSON(),
      img: imgRef.current,
      booked: false,
      text,
      title,
    };
    dispatch(addPost(post));
    navigation.navigate("HomeMenu");
  };

  const photoPickHandler = (url) => {
    imgRef.current = url
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
          <PhotoPicker onPick={photoPickHandler}/>
          <Button
            title={"Create post"}
            onPress={savePost}
            disabled={!title}
          />
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