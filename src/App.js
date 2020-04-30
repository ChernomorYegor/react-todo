import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import TodoContext from "./TodoContext";

function App() {
    const [todos, setTodos] = useState([
        { id: 1, text: 'Buy milk' },
        { id: 2, text: 'Some eggs' },
        { id: 3, text: 'Go to work' },
        { id: 4, text: 'reactjsexample.com' }
    ]);

    function addTodo(text) {
        setTodos(todos.concat([{
            id: Date.now(),
            text: text
        }]));
    }

    function removeTodo(idTodo) {
        setTodos(todos.slice().filter(todo => todo.id !== idTodo));
    }

    return (
        <TodoContext.Provider value={removeTodo}>
            <div className="app">
                <AddTodo addTodo={addTodo} />
                <TodoList todos={todos} />
            </div>
        </TodoContext.Provider>
    );
}

export default App;
