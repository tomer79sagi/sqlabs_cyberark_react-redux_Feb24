import { useReducer } from "react";
import axios from "axios";

// Define action types for CRUD operations
const actionTypes = {
    FETCH_START: 'FETCH_START',
    FETCH_FAILURE: 'FETCH_FAILURE',
    GET_ALL_SUCCESS: 'GET_ALL_SUCCESS',
    GET_ONE_SUCCESS: 'GET_ONE_SUCCESS',
    POST_SUCCESS: 'POST_SUCCESS',
    UPDATE_SUCCESS: 'UPDATE_SUCCESS',
    DELETE_SUCCESS: 'DELETE_SUCCESS',
};

const apiReducer = (state, action) => {
    switch (action.type) {
        case actionTypes.FETCH_START:
            return { ...state, loading: true, error: null };
        case actionTypes.FETCH_FAILURE:
            return { ...state, loading: false, error: action.payload };
        case actionTypes.GET_ALL_SUCCESS:
        case actionTypes.GET_ONE_SUCCESS:
        case actionTypes.POST_SUCCESS:
        case actionTypes.UPDATE_SUCCESS:
        case actionTypes.DELETE_SUCCESS:
            return { ...state, loading: false, data: action.payload, error: null };
        default:
            return state;
    }
}

const useApi = (initialUrl) => {
    const initialState = {
        data: null,
        loading: false,
        error: null,
        url: initialUrl,
        apiHeaders: {
            'Authorization': 'Bearer y2DLlApb__svkB8FfYn2Y3zG5lLkM_RV00CUXfHvei0aBDrbaA',
            'Content-Type': 'application/json'
        }
    }
    
    const [state, dispatch] = useReducer(apiReducer, initialState);

    const getAll = async(url = state.url) => {
        dispatch({ type: actionTypes.FETCH_START });
        try {
            const response = await axios.get(url, { headers: state.apiHeaders });
            dispatch({ type: actionTypes.GET_ALL_SUCCESS, payload: response.data });
        } catch (error) {
            dispatch({ type: actionTypes.FETCH_FAILURE, payload: error.message });
        }
    }

    const createOne = async(data, url = state.url) => {
        dispatch({ type: actionTypes.FETCH_START });
        try {
            const response = await axios.post(url, data, { headers: state.apiHeaders });
            dispatch({ type: actionTypes.POST_SUCCESS, payload: response.data });
        } catch (error) {
            dispatch({ type: actionTypes.FETCH_FAILURE, payload: error.message });
        }
    }

    return {...state, getAll, createOne};
}

export default useApi;