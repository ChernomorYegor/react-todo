import React, { useState } from "react";

function AddTodo({ addTodo }) {
    const [value, setValue] = useState('');

    function submitAdd(e) {
        e.preventDefault();

        if (value !== '') {
            addTodo(value);
            setValue('');
        }
    }

    function changeValue(e) {
        setValue(e.target.value);
    }

    return (
        <form onSubmit={submitAdd}>
            <div className="input-group mb-4">
                <input
                    className="form-control"
                    type="text"
                    placeholder="Enter new todo"
                    value={value}
                    onChange={changeValue}
                />
                <div className="input-group-append">
                    <button className="btn btn-primary" type="submit">Add</button>
                </div>
            </div>
        </form>
    );
}

export default AddTodo;