import React, {useState} from 'react'


function ToDoList() {

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {
        const trimmed = newTask.trim();
        if(trimmed !== "") {
            setTasks(t => ([...t, trimmed]));
            setNewTask('');
        }
    }

    function moveUp(index) {
        if(index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index-1], updatedTasks[index]] = [updatedTasks[index], updatedTasks[index-1]]
            setTasks(updatedTasks)
        }
    }

    function moveDown(index) {
        if(index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index+1]] = [updatedTasks[index+1], updatedTasks[index]]
            setTasks(updatedTasks)
        }
    }

    function deleteTask(index) {
        setTasks(t => (t.filter((_, i) => i !== index)))
    }

    return(
        <>
            <div className="addBar">
                <input
                    type='text'
                    placeholder='Enter New Task'
                    value={newTask}
                    onChange={handleInputChange}
                />
                <button onClick={addTask}>ADD</button>
            </div>    
    
            <ol>
                {tasks.map((task, index) => (
                    <li key={index}>
                        <span className='text'>{task}</span>
                        <button onClick={() => moveUp(index)} className='move-up-btn' disabled={index === 0}>MOVE UP</button>
                        <button onClick={() => moveDown(index)} className='move-down-btn' disabled={index === tasks.length - 1}>MOVE DOWN</button>
                        <button onClick={() => deleteTask(index)} className='delete-btn'>DELETE</button>
                    </li>
                ))}
            </ol>
        </>
    )
}

export default ToDoList