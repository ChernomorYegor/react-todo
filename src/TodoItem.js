import React, { useContext} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import TodoContext from "./TodoContext";

function TodoItem({ todo }) {
    const removeTodo = useContext(TodoContext);
    return (
        <div className="todo-item">
            {todo.text}
            <button className="btn btn-danger btn-sm" type="button" onClick={removeTodo.bind(null, todo.id)}>Complete</button>
        </div>
    );
}

export default TodoItem;