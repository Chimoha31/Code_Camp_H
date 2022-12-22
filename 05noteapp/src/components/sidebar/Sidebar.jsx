import React from "react";
import "./Sidebar.css";

const Sidebar = ({
  handleAddNote,
  handleDeleteNote,
  notes,
  activeNote,
  setActiveNote,
}) => {
  // Sort
  const sortedNotes = notes.sort((a, b) => b.modDate - a.modDate);

  return (
    <div className="app-sidebar">
      <div className="app-sidebar-header">
        <h1>NOTE</h1>
        <button onClick={handleAddNote}>Add</button>
      </div>
      <div className="app-sidebar-notes">
        {sortedNotes.map((note) => (
          <div
            className={`app-sidebar-note ${note.id === activeNote && "active"}`}
            key={note.id}
            onClick={() => setActiveNote(note.id)}
          >
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
