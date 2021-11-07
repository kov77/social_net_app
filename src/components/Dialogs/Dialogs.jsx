import React from 'react';

import DialogItem from './DialogItem/DialogItem';
import style from './Dialogs.module.css';
import Message from './Message/Message';

let Dialogs = (props) => {

  let dialogsElements = props.dialogsPage.dialogsData.map((dialog) => {
    return <DialogItem id={dialog.id} name={dialog.name} />;
  });
  let messagesElements = props.dialogsPage.messagesData.map((message) => {
    return <Message message={message.message} id={message.id} />;
  });
  let newMessageBody = props.dialogsPage.newMessageText;
  let onSendMessageClick = () => {
    props.sendMessage();
  };
  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
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
    />
        </div>
        <div>
          <button onClick={onSendMessageClick}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
