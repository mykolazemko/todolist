import React, { useState } from 'react';

function TaskInput(props) {
    const [task, setTask] = useState('');

    const addTask = () => {
        let input  = task;
        if (input) {
            props.addTask(input);
            setTask(() => input = '' );
        }
    }

    const handleChange = (event) => {
        setTask(event.currentTarget.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        addTask(task)
        console.log(task)
        setTask("")
    }

    return (
        <form onSubmit={handleSubmit}>
            <input value={task} onChange={handleChange}></input>
            <button>Add</button>
        </form>
    )
}
////////////////////
// class TaskInput extends React.Component{
//     constructor(props){
//         super(props)
//         this.state = {
//             input: ''
//         }
//     }

//     addTask = () => {       
//         const { input } = this.state;
//         if (input){
//             this.props.addTask(input);
//             this.setState({ input: '' });
//         }
//     }

//     handleEnter = (event) => {
//         if(event.key === "Enter") this.addTask()
//     }

//     inputChange = (event) => {
//         this.setState({ input: event.target.value })
//     }

//     render(){
//         const { input } = this.state;
//         return(
//             <div>
//                 <input onKeyPress={this.handleEnter} onChange={this.inputChange} value={input} placeholder="Add New Task"></input>
//                 <button onClick={this.addTask}>Add Task</button>
//             </div>
//         )        
//     }
// }



export default TaskInput
