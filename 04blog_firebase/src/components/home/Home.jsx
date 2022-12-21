import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="homePage">
      <div className="postContents">
        <div className="postHeader">
          <div className="title">
            <h1>Title</h1>
          </div>
        </div>
        <div className="postTextContainer">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus commodi
          corrupti dolores quia blanditiis.
        </div>
        <div className="nameAndDeleteButton">
          <h3>Chiho Code</h3>
          <button>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
