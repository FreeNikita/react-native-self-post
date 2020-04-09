import {ADD_POST, LOAD_POST, REMOVE_POST, TOGGLE_BOOKED} from "../type";
import * as FileSystem from 'expo-file-system';
import {DB} from "../../db";

export const loadPost = () => async (dispatch) => {
  const post = await DB.getPost();
  dispatch({
    type: LOAD_POST,
    payload: {posts: post}
  })
};

export const toggleBooked = (post) => async (dispatch)=> {
  await DB.updatePost(post);

  dispatch({
    type: TOGGLE_BOOKED,
    payload: {id: post.id}
  })
};

export const removePost = (id) => async (dispatch) => {
  await DB.removePost(id);

  dispatch({
    type: REMOVE_POST,
    payload: {id}
  })
};

export const addPost = (post) => async (dispatch) => {
  const fileName = post.img.split('/').pop();
  const newPath = FileSystem.documentDirectory + fileName;

  try {
    await FileSystem.moveAsync({
      to: newPath,
      from: post.img,
    });
  } catch  (err) {
    console.log("Error: ", err)
  }

  const payload = {...post, img: newPath};
  payload.id = await DB.createPost(payload);

  dispatch({
    type: ADD_POST,
    payload: {post: payload}
  })
};