import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

function App() {
    const TODOS = 'TODOS';

    const initTodo = () => JSON.parse(window.localStorage.getItem(TODOS)) || [];

    const [todos, setTodos] = useState(initTodo);

    useEffect( () => window.localStorage.setItem(TODOS, JSON.stringify(todos)));

    function addTodo(text) {
        setTodos(todos.concat([{
            id: todos.length + 1,
            text: text
        }]));
    }

    function removeTodo(idTodo) {
        setTodos(todos.slice().filter(todo => todo.id !== idTodo));
    }

    return (
        <div className="app">
            <AddTodo addTodo={addTodo} />
            <TodoList todos={todos} removeTodo={removeTodo} />
        </div>
    );
}

export default App;