const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState =  {
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
};


const dialogsReducer = (state = initialState, action) => {
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
