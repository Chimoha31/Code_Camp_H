import React, { useEffect, useState } from "react";
import "./App.css";
import Main from "./components/main/Main";
import Sidebar from "./components/sidebar/Sidebar";
import uuid from "react-uuid";
import ReactMarkdown from 'react-markdown'

const App = () => {
  const [notes, setNotes] = useState([]);
  const [activeNote, setActiveNote] = useState(false);

  // Add Note
  const handleAddNote = () => {
    console.log("Added note!");
    const newNote = {
      id: uuid(),
      title: "Chiho's note",
      content: "I took a walk with Teddy kun 🐶",
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

  // Selected Note
  const getActiveNote = () => {
    return notes.find((note) => note.id === activeNote);
  };

  // Update note (Edit)
  const onUpdateNote = (updatedNote) => {
    const updatedNotesArray = notes.map((note) => {
      if (note.id === updatedNote.id) {
        return updatedNote;
      } else {
        return note;
      }
    });
    setNotes(updatedNotesArray);
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
      <Main getActiveNote={getActiveNote()} onUpdateNote={onUpdateNote} />
    </div>
  );
};

export default App;
