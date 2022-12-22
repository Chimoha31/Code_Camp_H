import React, { useState } from "react";
import "./App.css";
import Main from "./components/main/Main";
import Sidebar from "./components/sidebar/Sidebar";
import uuid from "react-uuid";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [activeNote, setActiveNote] = useState(false);

  // Add Note
  const handleAddNote = () => {
    console.log("Added note!");
    const newNote = {
      id: uuid(),
      title: "Chiho's note",
      content: "Note content...",
      modDate: Date.now(),
    };
    setNotes([...notes, newNote]);
    console.log(notes);
  };

  // Delete Note
  const handleDeleteNote = (id) => {
    console.log("id:", id, "Deleted");
    const filteredNotes = notes.filter((note) => id !== note.id);
    setNotes(filteredNotes);
  };

  return (
    <div className="App">
      <Sidebar
        handleAddNote={handleAddNote}
        handleDeleteNote={handleDeleteNote}
        notes={notes}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
      />
      <Main />
    </div>
  );
};

export default App;
