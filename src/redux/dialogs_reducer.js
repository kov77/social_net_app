const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';
const SEND_MESSAGE = 'SEND_MESSAGE';

const dialogsReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.body;
      return state;
    case SEND_MESSAGE:
      let body = state.newMessageText;
      state.newMessageText = '';
      state.messagesData.push({ id: 6, message: body });
      return state;
    default:
      return state;
  }
};

export const sendMessageCreator = () => {
  return { type: SEND_MESSAGE };
};
export const updateNewMessageBodyCreator = (text) => {
  return { type: UPDATE_NEW_MESSAGE_TEXT, body: text };
};

export default dialogsReducer;
