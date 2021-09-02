import React, {useState} from "react";
import "./todoapp.css";


function TodoApp() {
    const [task, setTask] = useState("")
    const [info, setInfo] = useState("")
    const [tasklist, setTaskList] = useState([]);
    const [tasklistinfo, setTaskListInfo] = useState([]);

    const handleChangeTask = (e) => {
        setTask(e.target.value);
    };
    const handleChangeInfo = (c) => {
        setInfo(c.target.value);
    };
    const AddTask = () => {

        console.log(info);
        if (task !== "") {
            const taskDetails = {
                id: Math.floor(Math.random() * 1000),
                value: task, info,
                isCompleted: false,
            }
            setTaskList([...tasklist, taskDetails]);


        }
    };

    const deletetask =(e,id) =>{
        e.preventDefault();
        setTaskList(tasklist.filter(t => t.id != id))
    };
    const taskCompleted =(e,id) =>
    {
        e.preventDefault();
        //finding index of the element
        const element =tasklist.findIndex(elem =>elem.id ==id);
        //coping array into variable
        const newTaskList =[...tasklist];
        //editing our element
        newTaskList[element] ={
            ...newTaskList[element],
            isCompleted: true,

        }
        setTaskList(newTaskList);
    };
    return <div className="todo">
        <input type="text" name="text" id="text" onChange={(e) => handleChangeTask(e)} placeholder="New task here..."/>
        <br/>
        <input type="text" name="text" id="text" onChange={(c) => handleChangeInfo(c)}
               placeholder="Task description..."/>
        <button className="add-btn" onClick={AddTask}>Add Task</button>
        <br/>
        {tasklist !== [] ?
            <ul>

                {tasklist.map(t =>
                    <li className={t.isCompleted ? "crossText": "tasks"}>
                        <div>{t.value}</div>
                        <div className="info">{t.info}</div>
                        <button className="completed" onClick={e =>taskCompleted(e,t.id)}>Completed</button>
                        <button className="delete" onClick={e => deletetask(e, t.id)} >Delete</button>
                    </li>
                )}

            </ul>
            : null}
    </div>;


}

export default TodoApp;
