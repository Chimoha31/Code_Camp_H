import React, { useState } from "react";
import "./App.css";
import Main from "./components/main/Main";
import Sidebar from "./components/sidebar/Sidebar";

const App = () => {
  const [notes, setNotes] = useState([]);

  const handleAddNote = () => {
    console.log("Added note!");
    const newNote = {
      id: Math.random(),
      title: "Chiho's note",
      content: "Note content...",
      modDate: Date.now(),
    };
    setNotes([...notes, newNote]);
    console.log(notes);
  };

  return (
    <div className="App">
      <Sidebar handleAddNote={handleAddNote} notes={notes} />
      <Main />
    </div>
  );
};

export default App;
