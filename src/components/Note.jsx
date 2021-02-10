import React, {useState} from 'react';

const Note = ({ message , id, notes, deleteNote, isDone }) => {
    const [state, setState] = useState('4');
   
    const DelBtn = () => <div>
        {


        notes[id].done ?
        <button onClick={() => deleteNote(id)}>X</button> :
        <button onClick={() => {isDone(id); setState('DonE')}}>V</button>
        }
            
     
    </div>
        
    return (
        <div className="note">
            <p className="todo-item">{message} | {id}</p>
            <button onClick={() => deleteNote(id)}>Delete</button>
            <button onClick={() => isDone(id)}>Done</button>
            <DelBtn />

        </div>
    )
}
export default Note