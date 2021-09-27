import React from 'react';
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from '../../redux/dialogs_reducer';
import Dialogs from "./Dialogs";

let DialogsContainer = (props) => {
  let state = props.store.getState();
  let onMessageClick = () => {
     props.store.dispatch(sendMessageCreator());
  };
  let onMessageChange = (body) => {
    props.store.dispatch(updateNewMessageBodyCreator(body));
  };

  return (<Dialogs sendMessage={onMessageClick}
                   updateNewMessageBody={onMessageChange}
                   store={props.store}
                   state = {state.dialogsPage}
                   newMessageText = {state.newMessageText}
/>);
};

export default DialogsContainer;
