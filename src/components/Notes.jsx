import React, { useState, useEffect } from 'react';
import Note from './Note';

const handleSubmit = (e, notes, setNotes, input, setInput) => {
    e.preventDefault()
    const id = (notes.length) ? notes[notes.length-1].id+1 : 0
    setNotes([...notes, { id: id, message: input, done: false}])
    setInput('')
}

const deleteNote = (id, notes, setNotes) => {
    setNotes(notes.filter(note => note.id !== id))
}

const isDone = (id, notes, setNotes) => {
    const index = notes.map(note => note.id).indexOf(id);    
    notes[index].done !== true ? notes[index].done = true : deleteNote(id, notes, setNotes)
}

const Notes = () => {
    const [notes, setNotes] = useState([]);
    const [input, setInput] = useState('');
   
    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e, notes, setNotes, input, setInput)}>
                <input type="text"
                        onChange={(e) => setInput(e.target.value)}
                        value={input}
                        placeholder="AddNew"/>
                <button>Add</button>
            </form>
            {notes.map(note =>
                <Note message={note.message}
                      id={note.id}
                      key={note.id}
                      deleteNote={(id) => deleteNote(id, notes, setNotes)}
                      isDone={(id) => isDone(id, notes, setNotes)}
                      notes={notes}/>
            )}




        </div>
    )
}

export default Notes