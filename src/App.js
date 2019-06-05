import React from 'react';
import './App.css';
import NotesContainer from "./components/Notes/NotesContainer";
import CreateNoteContainer from "./components/Notes/CreateNote/CreateNoteContainer";


function App() {
  return (
    <div className="App">
        <NotesContainer/>
        <CreateNoteContainer/>
    </div>
  );
}

export default App;
