import "./Task.css"

const Task = (props)=>{

    const task = "Task 1";
    return(
        <div className="task-card">
            <p>{props.task}</p>
            <button className="task-button done-button" >Done</button>
            <button className="task-button delete-button">Delete</button>
        </div>
    )

}
 
export default Task;