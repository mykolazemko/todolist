import React, { useState } from 'react';
import './App.css';
import Notes from './components/Notes';
import Counter from './components/Counter/Counter'
import ReactDOM from 'react-dom';


const App = () => {
  return(
    <div>
      <Notes />
    </div>
  )
}
ReactDOM.render(App, document.getElementById('root'));

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       tasks: [
//         { id: 0, title: 'title_1', done: false },
//         { id: 1, title: 'title_2', done: true },
//         { id: 2, title: 'title_3', done: false },
//       ]
//     }
//   }

//   addTask = (task) => {
//     this.setState(state => {
//       let { tasks } = state;
//       tasks.push({
//         id: tasks.length != 0 ? tasks.length : 0,
//         title: task,
//         done: false
//       });
//       console.log(this.state);
//       console.log(tasks)
//       return tasks
//     });
//   };

//   doneTask = (id) => {
//     const index = this.state.tasks.map(task => task.id).indexOf(id);
//     this.setState(state => {
//       let { tasks } = state;
//       tasks[index].done = true;
//       return tasks
//     });
//   };

//   deleteTask = (id) => {
//     const index = this.state.tasks.map(task => task.id).indexOf(id);
//     this.setState(state => {
//       let { tasks } = state;
//       delete tasks[index];
//       return tasks
//     })
//   }

//   render() {
//     const { tasks } = this.state;
//     const activeTasks = tasks.filter(task => !task.done);
//     const doneTasks = tasks.filter(task => task.done);

//     return (
//       <div>
//         <h2>Active Todos: {activeTasks.length}</h2>
//         <TaskInput addTask={this.addTask}></TaskInput>
//         {[...activeTasks, ...doneTasks].map(task =>
//           <Task
//             doneTask={() => this.doneTask(task.id)}
//             deleteTask={() => this.deleteTask(task.id)}
//             task={task}
//             key={task.id} />
//         )}

//         <Counter />
//       </div>
//     )
//   }
// }

export default App;
