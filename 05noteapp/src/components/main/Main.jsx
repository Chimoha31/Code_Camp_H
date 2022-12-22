import React from "react";
import "./Main.css";

const Main = ({ getActiveNote, onUpdateNote }) => {
  const onEditNote = (key, value) => {
    onUpdateNote({
      ...getActiveNote,
      // 動的key
      [key]: value,
      modDate: Date.now(),
    });
  };

  if (!getActiveNote) {
    return (
      <div className="no-active-note">There is not a note been selected.</div>
    );
  }

  return (
    <div className="app-main">
      <div className="app-main-note-edit">
        <input
          id="title"
          type="text"
          value={getActiveNote.title}
          onChange={(e) => onEditNote("title", e.target.value)}
        />
        <textarea
          id="content"
          placeholder="note here.."
          value={getActiveNote.content}
          onChange={(e) => onEditNote("content", e.target.value)}
        ></textarea>
      </div>

      <div className="app-main-note-preview">
        <h1 className="preview-title">{getActiveNote.title}</h1>
        <div className="markdown-preview">{getActiveNote.content}</div>
      </div>
    </div>
  );
};

export default Main;
