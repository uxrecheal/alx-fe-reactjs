import React from 'react'
import {useState} from 'react'

const TodoList = () => {
    const [Todos, setTodos] = useState ({
        text: 'Meet up with Instructor for Driving lessons',
        id: 1
    },
    {   text: 'Learn and practice my React coding skills',
        id: 2
    })

    const [newTodo, setNewTodo] = useState('');

    const addTodo = (text) => {
        const newTodoItem = {
            id: Date.now(),
            text,
            completed: false,
        };
        setTodos([...todos, newTodoItem]);
    };

    const toggleTodo = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newTodo.trim()) {
            addTodo(newTodo.trim());
            setNewTodo('');
        }
    };

    return (
        <div>
            <h1>Todo List</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    placeholder="Add a new todo"
                />
                <button type="submit">Add</button>
            </form>
            <ul>
                {todos.map((todo) => (
                    <li
                        key={todo.id}
                        onClick={() => toggleTodo(todo.id)}
                        style={{
                            textDecoration: todo.completed ? 'line-through' : 'none',
                            cursor: 'pointer',
                        }}
                    >
                        {todo.text}
                        <button onClick={(e) => {
                            e.stopPropagation();
                            deleteTodo(todo.id);
                        }}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};


export default TodoList