import React, { useState, useEffect } from 'react';
import NavBar from '../../NavBar/NavBar';
import './ToDoList.css'

export function ToDoList() {

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');
  
    const addTask = () => {
      if (newTask.trim() !== '') {
        setTasks([...tasks, newTask]);
        setNewTask('');
      }
    };
  
    const deleteTask = (index) => {
      const updatedTasks = [...tasks];
      updatedTasks.splice(index, 1);
      setTasks(updatedTasks);
    };
  

    useEffect(() => {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);
  

    useEffect(() => {
      const storedTasks = JSON.parse(localStorage.getItem('tasks'));
      if (storedTasks) {
        setTasks(storedTasks);
      }
    }, []);
  
    return (
      <div>
        <NavBar className="navbar"/>
        <div className="overlay">
          <div className="content">
             <div className="todo-container">
     
            <h1 className="title">To Do List</h1>
            <div className="right-content">
                <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                placeholder="Add a Task..."
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      addTask(); 
                    }
                }}
                />
              
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="button-add" onClick={addTask} >
                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                </svg>

            </div>
            </div>
            <div className="task-grid">
                {tasks.map((task, index) => (
                    <div className="task-card" key={index}>
                    <p>{task}</p>
                    <div className="delete-container">
                        <svg xmlns="http://www.w3.org/2000/svg" className="delete-btn" onClick={() => deleteTask(index)} viewBox="0 0 24 24" fill="currentColor">
                        <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z" clipRule="evenodd" />
                        </svg>
                    </div>
                    </div>
                ))}
                
                </div>
               

        </div>
        </div>
      </div>
    );
  }

export default ToDoList;
