import {ADD_POST, LOAD_POST, REMOVE_POST, TOGGLE_BOOKED} from "../type";

export const loadPost = () => {
  return {
    type: LOAD_POST,
    payload: {posts: []}
  }
};

export const toggleBooked = (id) => {
  return {
    type: TOGGLE_BOOKED,
    payload: {id}
  }
};

export const removePost = (id) => {
  return {
    type: REMOVE_POST,
    payload: {id}
  }
};

export const addPost = (post) => {
  post.id = new Date().toString();

  return {
    type: ADD_POST,
    payload: {post}
  }
};