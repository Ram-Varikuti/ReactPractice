import React, { useState } from "react";

const Todos = () => {

    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');


    const addTodo = () => {
        if (newTodo.trim()) {
            setTodos([
                ...todos,
                { id: Date.now(), text: newTodo, completed: false },
            ]);
            setNewTodo('');
        }
    }

    const toggleCompletion = (id) => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    }

    const removeTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    }

    return (
        <div>
            <h1>Todos</h1>
            <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} placeholder="enter new Todo"></input>
            <button onClick={addTodo}>ADD</button>
            <ol>
                {todos.map((todo, index) => (
                    <li key={index} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}><input type="checkbox" checked={todo.completed} onChange={() => toggleCompletion(todo.id)} />{todo.text}<button onClick={() => removeTodo(todo.id)}>DELETE</button></li>
                )
                )}
            </ol>
        </div>
    )

}
export default Todos;