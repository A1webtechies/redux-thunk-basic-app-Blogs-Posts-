import React from "react";
import UserName from "./UserName";
const PostListItem = ({ posts }) => {
  return (
    <div>
      {posts.map(post => (
        <li className="collection-item avatar" key={post.id}>
          <i className="material-icons circle">person</i>
          <span className="title">{post.title}</span>
          <p>{post.body}</p>
          <UserName id={post.userId} />
        </li>
      ))}
    </div>
  );
};

export default PostListItem;
