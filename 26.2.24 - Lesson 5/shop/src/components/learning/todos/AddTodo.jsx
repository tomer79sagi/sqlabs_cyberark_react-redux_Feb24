import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import { addTodo } from './TodosSlice';

const AddTodo = () => {
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTodo(text));
        setText('');
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default AddTodo;