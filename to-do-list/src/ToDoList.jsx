import React, {useState} from 'react'


function ToDoList() {

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {
        if(newTask.trim() !== "") {
            setTasks(t => ([...t, newTask]));
        }
    }




    return(
        <>
            <div className="addBar">
                <input type='text' placeholder='Enter New Task' onChange={handleInputChange}></input>
                <button onClick={addTask}>ADD</button>
            </div>    
    
        </>
    )
}

export default ToDoList