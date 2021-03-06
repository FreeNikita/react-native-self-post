import {ADD_POST, LOAD_POST, REMOVE_POST, TOGGLE_BOOKED} from "../type";

const initialState = {
  allPosts: [],
  bookPosts: [],
  loading: true,
};

export const postReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case LOAD_POST:
      return {
        ...state,
        allPosts: payload.posts,
        bookPosts: payload.posts.filter(({booked}) => booked),
        loading: false,
      };
    case TOGGLE_BOOKED: {
      const allPosts = state.allPosts.map( post => {
        if(post.id === payload.id){
          post.booked = !post.booked
        }
        return post
      });
      return {
        ...state,
        allPosts,
        bookPosts: allPosts.filter(({booked}) => booked)
      }
    }
    case REMOVE_POST: {
      return {
        ...state,
        allPosts: state.allPosts.filter(post => post.id !== payload.id),
        bookPosts: state.bookPosts.filter(post => post.id !== payload.id)
      }
    }
    case ADD_POST: {
      return {
        ...state,
        allPosts: [{...payload.post}, ...state.allPosts]
      }
    }
    default:
      return state
  }

};