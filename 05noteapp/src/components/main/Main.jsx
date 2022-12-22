import React from "react";
import "./Main.css";

const Main = ({ getActiveNote }) => {
  console.log(getActiveNote);

  if (!getActiveNote) {
    return <div className="no-active-note">There is not a note been selected.</div>;
  }

  return (
    <div className="app-main">
      <div className="app-main-note-edit">
        <input type="text" />
        <textarea id="" placeholder="note here.."></textarea>
      </div>

      <div className="app-main-note-preview">
        <h1 className="preview-title">{getActiveNote.title}</h1>
        <div className="markdown-preview">{getActiveNote.content}</div>
      </div>
    </div>
  );
};

export default Main;
