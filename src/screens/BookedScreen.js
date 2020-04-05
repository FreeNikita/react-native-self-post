import React from 'react';
import {DATA} from "../data";
import {Posts} from "../components/Posts";

export const BookedScreen = ({navigation}) => {
  const posts = DATA.filter(post => post.booked);

  return <Posts posts={posts} navigation={navigation} />
};