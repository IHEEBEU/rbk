import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Main() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        axios
            .get('http://127.0.0.1:1337/list')
            .then(res => setTasks(res.data))
            .catch(error => {
                console.log(error);
            });
    }, []);

    console.log(tasks);

    return (
        <div>
            <h1>Task List</h1>
            <input placeholder="Type your next task" />
            <div>
                {tasks.map(task =>{
                return  (
                    <div key={task.id}>
                        <div>ID: {task.id}</div>
                        <div>Task: {task.task}</div>
                    </div>
                )})}
            </div>
        </div>
    );
}

export default Main;
