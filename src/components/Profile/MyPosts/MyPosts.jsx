import React from 'react';
import Post from './Post/Post';
import style from './MyPosts.module.css';
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from '../../../redux/profile_reducer';

const MyPosts = (props) => {
  let postsElements = props.postData.map((p) => (
    <Post message={p.post} likeCount={p.likes} id={p.id} />
  ));
  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };
  let newPostEl = React.createRef();
  let onPostChange = () => {
    let text = newPostEl.current.value;
    let action = updateNewPostTextActionCreator(text);
    props.dispatch(action);
  };
  console.log(props.newPostText);

  return (
    <div className={style.postsBlock}>
      <div>
        <h3>my posts</h3>
        <div>new post</div>
        <textarea
          onChange={onPostChange}
          ref={newPostEl}
          value={props.newPostText}
        />
        <div>
          <button onClick={addPost}>Add Post</button>
        </div>
      </div>
      <div className={style.posts}>
        Posts
        <div>{postsElements} </div>
      </div>
    </div>
  );
};

export default MyPosts;
