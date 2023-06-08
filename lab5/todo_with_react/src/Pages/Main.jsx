import { useState } from "react";
import {useAuth} from "../Firebase/UserService";
import { addNewToDo } from "../Firebase/TodoService";

const Main = (props) => {
    const toDoList = props.toDoList;
    const toDoListHTML = toDoList.map(
        (it, i) => <p key={i}>{it}</p>
    );
    const setToDoList = props.setToDoList;

    const [newTodo, setNewTodo] = useState("jajko");

    const user = useAuth();

    const handleNewTodo = (event) => {
        // console.log({event});
        setNewTodo(event.target.value);
    }

    const handleAddNewToDo = () => {
        setToDoList(toDoList.concat([newTodo]));
        addNewToDo(user, newTodo);
        setNewTodo("");
    }


    return (
    <div className="App">
        <input type="text" value={newTodo} onChange={handleNewTodo}></input>
        <button onClick={handleAddNewToDo}>Add to list</button>
        {toDoListHTML}
    </div>
    );
}

export default Main;
