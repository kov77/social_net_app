import dialogsReducer from './dialogs_reducer';
import profileReducer from './profile_reducer';
import sidebarReducer from './sidebar_reducer';

let store = {
  _state: {
    profilePage: {
      postData: [
        { id: 1, post: 'Hi, how are you?', likes: 'like 11' },
        { id: 2, post: "It's my first post", likes: 'like 18' },
        { id: 3, post: "It's my second post", likes: 'like 16' },
      ],
      newPostText: '',
    },
    dialogsPage: {
      messagesData: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How are you?' },
        { id: 3, message: 'You are stupid!' },
        { id: 4, message: 'stupid' },
        { id: 5, message: 'Ole' },
      ],
      dialogsData: [
        { id: 10, name: 'Dimon' },
        { id: 20, name: 'Andrey' },
        { id: 30, name: 'Sasha' },
        { id: 40, name: 'Victor' },
        { id: 50, name: 'Oleg' },
      ],
      newMessageText: '',
    },
    sidebar: {},
  },
  _callsubscriber() {},
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callsubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callsubscriber(this._state);
  },
};

window.store = store;
export default store;
