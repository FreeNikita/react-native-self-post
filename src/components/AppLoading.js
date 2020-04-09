import React from 'react';
import {View, ActivityIndicator, StyleSheet} from "react-native";
import {THEME} from "../theme";

export const Loading = () => {

  return (
    <View style={styles.wrap}>
      <ActivityIndicator color={THEME.MAIN_COLOR} />
    </View>
  )
};

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
