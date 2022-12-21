import React, { useEffect, useState } from "react";
import "./Home.css";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { auth } from "../../firebase/firebase";

const Home = () => {
  const [postList, setPostsList] = useState([]);

  // Get All Posts Data
  const getAllPosts = async () => {
    const data = await getDocs(collection(db, "posts"));
    // 階層が深いので欲しいdataが入手しづらい。BUT data()関数を使うことで簡単に解決！
    setPostsList(
      data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }))
    );
  };

  // delete Post
  const handleDeletePost = async (id) => {
    try {
      await deleteDoc(doc(db, "posts", id));
      window.location.href = "/";
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <div className="homePage">
      {postList.map((post) => (
        <div className="postContents" key={post.id}>
          <div className="postHeader">
            <div className="title">
              <h1>{post.titie}</h1>
            </div>
          </div>
          <div className="postTextContainer">{post.postText}</div>
          <div className="nameAndDeleteButton">
            <h3>@{post.author.username}</h3>
            {post.author.id === auth.currentUser.uid && (
              <button onClick={() => handleDeletePost(post.id)}>Delete</button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
