import { createSlice } from '@reduxjs/toolkit';

export const todosSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: Math.floor(Math.random() * 1000),
                text: action.payload,
            };

            // This is irregular --> treating immutable state in a mutuable way (more on this to follow)
            state.push(todo);
        }
    }
});

export const { addTodo } = todosSlice.actions;

export default todosSlice.reducer;