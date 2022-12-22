import React from "react";
import "./Main.css";
import ReactMarkdown from "react-markdown";

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
          placeholder="Title"
          value={getActiveNote.title}
          onChange={(e) => onEditNote("title", e.target.value)}
        />
        <textarea
          id="content"
          placeholder="Write note here.."
          value={getActiveNote.content}
          onChange={(e) => onEditNote("content", e.target.value)}
        ></textarea>
      </div>

      <div className="app-main-note-preview">
        <h1 className="preview-title">{getActiveNote.title}</h1>
        <ReactMarkdown className="markdown-preview">
          {getActiveNote.content}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default Main;
