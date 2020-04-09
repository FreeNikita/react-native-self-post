import React, {useState} from "react";
import {View, Image, Button, Alert, StyleSheet} from "react-native";
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

async function askForPermissions(){
  const { status } =await Permissions.askAsync(
    Permissions.CAMERA,
    Permissions.CAMERA_ROLL
  );

  if(status !== 'granted'){
    Alert.alert("Error","Camera is not allow");
    return false
  } else {
    return true
  }
}

export const PhotoPicker = ({ onPick }) => {
  const [image, setImage] = useState(null);

  const takePhoto = async () => {
    const hasPermissions = await askForPermissions();
    if (!hasPermissions) {
      return
    }

    const img = await ImagePicker.launchCameraAsync({
      quality: 0.7,
      allowsEditing: false,
      aspect: [16, 9]
    });

    setImage(img.uri);
    onPick(img.uri);
  };

  return (
    <View style={styles.wrap}>
      <Button title={'Create Photo'} onPress={takePhoto}/>
      {image && <Image source={{url: image}} style={styles.image}/>}
    </View>
  )
};

const styles = StyleSheet.create({
  wrap: {
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 10
  }
});