import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const Task = ({ task, ...props }) => {
    const ActionBtn = () => <div className="status-icon">        
        {!task.done ?
        <p className="done"onClick={props.doneTask}>{<FontAwesomeIcon  icon={faCheckCircle} />}</p> :
        <p className="delete" onClick={props.deleteTask}>{<FontAwesomeIcon icon={faTrashAlt} />}</p>}
        </div>
    return(
        <div className="todo">
            <p className="todo-item">{task.id + "********* " + task.title}</p>
            <ActionBtn />
        </div>
    )
}

export default Task;