import React from 'react';
import Post from './Post/Post';
import style from './MyPosts.module.css';


const MyPosts = (props) => {
  let postsElements = props.postData.map((p) => (
    <Post message={p.post} likeCount={p.likes} id={p.id} />
  ));
  let onAddPost = () => {
    props.addPost();
  };
  let newPostEl = React.createRef();
  let onPostChange = () => {
    let text = newPostEl.current.value;
    props.updateNewPostText(text)
  };

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
          <button onClick={onAddPost}>Add Post</button>
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
