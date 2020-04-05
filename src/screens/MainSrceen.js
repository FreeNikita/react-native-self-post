import React from 'react';
import {DATA} from "../data";
import {Posts} from "../components/Posts";

export const MainScreen = ({navigation}) => {

  return <Posts posts={DATA} navigation={navigation} />
};
