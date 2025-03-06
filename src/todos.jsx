import React, { useState } from "react";

const Todos = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');
    const [filter, setFilter] = useState('all');

    const addTodo = () => {
        if (newTodo.trim()) {
            setTodos([
                ...todos,
                { id: Date.now(), text: newTodo, completed: false },
            ]);
            setNewTodo('');
        }
    };

    const toggleCompletion = (id) => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
    };

    const removeTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    // Filter todos based on the selected filter
    const filteredTodos = todos.filter((todo) => {
        if (filter === 'all') {
            return true;
        } else if (filter === 'completed') {
            return todo.completed;
        } else {
            return !todo.completed;
        }
    });

    return (
        <div>
            <h1>Todos</h1>
            <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="Enter new Todo"
            />
            <button onClick={addTodo}>ADD</button>

            <div>
                <button onClick={() => setFilter('all')}>ALL</button>
                <button onClick={() => setFilter('completed')}>Completed</button>
                <button onClick={() => setFilter('incompleted')}>InCompleted</button>
            </div>

            <ol>
                {filteredTodos.map((todo) => (
                    <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => toggleCompletion(todo.id)}
                        />
                        {todo.text}
                        <button onClick={() => removeTodo(todo.id)}>DELETE</button>
                    </li>
                ))}
            </ol>
        </div>
    );
};

export default Todos;
