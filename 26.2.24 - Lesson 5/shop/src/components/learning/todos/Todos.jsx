import React from 'react';
import { useSelector } from 'react-redux';

const Todos = () => {
    const todos = useSelector(state => state.todos);

    if (!todos || todos.length === 0) return <div>No results</div>

    return (
        <div>
            <h4>Todos List</h4>
            { todos.map(todo => (
                <div key={todo.id}>{todo.text}</div>
            ))}
        </div>
    )
}

export default Todos;
