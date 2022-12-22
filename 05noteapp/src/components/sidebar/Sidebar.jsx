import React from "react";
import "./Sidebar.css";

const Sidebar = ({ handleAddNote, handleDeleteNote, notes }) => {
  
  return (
    <div className="app-sidebar">
      <div className="app-sidebar-header">
        <h1>NOTE</h1>
        <button onClick={handleAddNote}>Add</button>
      </div>
      <div className="app-sidebar-notes">
        {notes.map((note) => (
          <div className="app-sidebar-note" key={note.id}>
            <div className="sidebar-note-title">
              <strong>{note.title}</strong>
              <button onClick={() => handleDeleteNote(note.id)}>Delete</button>
            </div>
            <p>{note.content}</p>
            <small>
              Last update:
              {new Date(note.modDate).toLocaleDateString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
