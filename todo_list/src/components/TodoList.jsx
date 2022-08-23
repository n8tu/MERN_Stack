import React , {useState} from "react";
import "bootstrap/dist/css/bootstrap.css"

const TodoList = props => {

    let [tasks,setTasks] = useState([]);
    let [task,setTask] = useState("");

    //Add Task the "Tasks" list after doing a basic validation.
    const addTask = (e) => {
        e.preventDefault();
        if(task.length < 2){
            alert("task cannot be less than 2 characters")
        }else{
            setTasks([...tasks,task]);
            setTask("");
        }
    }

    const deleteList = (event,index) => {
        event.preventDefault();
        // reset the tasks after filtering the array by ignoring the index we want to delete
        setTasks([...tasks].filter( (e,i) => { return i != index}));
    }

    return(
        <div className="container w-50 mb-3">

            <form onSubmit={addTask} className={"w-50 my-4 mx-auto"}>
                <div className="row mb-3">
                    <label htmlFor="task">Task:</label>
                    <input type="text" onChange={ (e) => setTask(e.target.value)}
                           className={"form-control bg-secondary"} value={task}/>
                </div>
                <button className="btn btn-primary">Add</button>
            </form>

            <div className="container mb-3">
                <ul className={"list-group"}>

                    {/* loop in all tasks and modify it value to the one below and print it */}
                    { tasks.map( (list,index) =>
                        <li key={index} className={"list-group-item list-group-item-action"}>
                            <span> {list} </span>
                            <button onClick={(e) => deleteList(e,index)} className="btn btn-dark mx-2" >Delete</button>
                        </li>
                    )}

                </ul>
            </div>
        </div>
    )
}

export default TodoList;