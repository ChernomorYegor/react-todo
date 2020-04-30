import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import TodoItem from "./TodoItem";

function TodoList({ todos }) {
    console.log(todos);
    return (
        <div className="todo-list">
            <h4 className="mb-1">Todo List</h4>
            <p className="text-right mb-0">There are {todos.length} todos.</p>
            {
                todos.map(todo => <TodoItem key={todo.id} todo={todo} />)
            }
        </div>
    );
}

export default TodoList;