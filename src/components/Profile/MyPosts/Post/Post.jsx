import React from 'react';
import profile from './Post.module.css';

const Post = (props) => {
  return (
    <div className={profile.item}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTukrj_JLycWh-YrCqXmkhMImNCsdvcowlaAwNpTk3F6pNXETsPKUV9Tp35CoI671VvUX8&usqp=CAU" />
      {props.message}
      <div>{props.likeCount}</div>
    </div>
  );
};

export default Post;
