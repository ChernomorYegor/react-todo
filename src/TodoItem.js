import React from 'react';

function TodoItem({ todo, removeTodo }) {
    return (
        <div className="todo-item">
            {todo.text}
            <button className="btn btn-danger btn-sm" type="button" onClick={removeTodo.bind(null, todo.id)}>Complete</button>
        </div>
    );
}

export default TodoItem;