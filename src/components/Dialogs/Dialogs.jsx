import React from 'react';
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from '../../redux/dialogs_reducer';
import DialogItem from './DialogItem/DialogItem';
import style from './Dialogs.module.css';
import Message from './Message/Message';

let Dialogs = (props) => {
  let state = props.store.getState().dialogsPage;

  let dialogsElements = state.dialogsData.map((dialog) => {
    return <DialogItem id={dialog.id} name={dialog.name} />;
  });
  let messagesElements = state.messagesData.map((message) => {
    return <Message message={message.message} id={message.id} />;
  });
  let newMessageBody = state.newMessageText;
  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator());
  };
  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.store.dispatch(updateNewMessageBodyCreator(body));
  };

  return (
    <div className={style.dialogs}>
      <div className={style.dialogItems}>{dialogsElements}</div>
      <div className={style.messages}>
        <div>{messagesElements}</div>
        <div>
          <textarea
            onChange={onNewMessageChange}
            value={newMessageBody}
            placeholder="Enter your message"
          ></textarea>
        </div>
        <div>
          <button onClick={onSendMessageClick}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
