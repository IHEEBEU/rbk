import React from "react";
import SearchBar from "../components/SearchBar.jsx";
import Main from "./Main.jsx"
import todoList from "../src/data/dummyData.js"
const TasksList =()=>{
    
    const tasks=todoList.map(task=>{
        return (
            <Main
                key={task.id}
                title={task.title}
                completed={task.completed}
            />
        )
    })
return (
    <div className="wrapper">
        <div className="task--main">
            <SearchBar/>
           <div className="contain--div">{tasks}</div>
        </div>
    </div>
)
}
export default TasksList;