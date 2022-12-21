import React, { useState } from "react";
import "./CreatePost.css";


const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");

  const handlePost = () => {
    console.log(title);
    console.log(postText);
  };

  return (
    <div className="createPostPage">
      <div className="postContainer">
        <h1>Post Article</h1>
        <div className="inputPost">
          <div>Title</div>
          <input
            type="text"
            placeholder="Write title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="inputPost">
          <div>Post</div>
          <textarea
            placeholder="Write a blog here..."
            value={postText}
            onChange={(e) => setPostText(e.target.value)}
          ></textarea>
        </div>
        <button className="postButton" onClick={handlePost}>
          POST
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
