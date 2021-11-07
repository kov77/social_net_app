const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

let initialState = {
  postData: [
    { id: 1, post: 'Hi, how are you?', likes: 'like 11' },
    { id: 2, post: "It's my first post", likes: 'like 18' },
    { id: 3, post: "It's my second post", likes: 'like 16' },
  ],
  newPostText: '',
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 12,
        post: state.newPostText,
        likes: 'like 0',
      };

      let stateCopy = {...state}
      stateCopy.postData.push(newPost);
      stateCopy.newPostText = '';
      return stateCopy;
    }
    case UPDATE_NEW_POST_TEXT:
      let stateCopy = {...state}
      // stateCopy.postData = {...state.postData}
      stateCopy.newPostText = action.newText;
      return stateCopy;
    default:
      return state;
  }
};

export const addPostActionCreator = () => {
  return { type: ADD_POST };
};
export const updateNewPostTextActionCreator = (text) => {
  return { type: UPDATE_NEW_POST_TEXT, newText: text };
};

export default profileReducer;
