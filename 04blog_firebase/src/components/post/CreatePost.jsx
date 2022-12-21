import React, { useEffect, useState } from "react";
import "./CreatePost.css";
import { auth, db } from "../../firebase/firebase";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const CreatePost = ({ isAuth }) => {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");
  const navigate = useNavigate("");

  const handlePost = async () => {
    try {
      await addDoc(collection(db, "posts"), {
        titie: title,
        postText: postText,
        author: {
          id: auth.currentUser.uid,
          username: auth.currentUser.displayName,
        },
      });
      console.log("Succesfully post a article");
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
    // eslint-disable-next-line
  }, []);

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
