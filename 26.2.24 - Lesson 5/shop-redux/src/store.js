import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './components/learning/todos/TodosSlice';

export default configureStore({
    reducer: { 
        todos: todosReducer
    }
});