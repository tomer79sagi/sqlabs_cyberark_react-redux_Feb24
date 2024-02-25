import React, {useState, useEffect} from 'react';
import './ProductList.css';
import ProductNewValidations from '../forms/ProductNewValidations';
import ProductEdit from '../forms/ProductEdit';
import Product from '../../models/Product';
import useApi from '../../hooks/useApi';

import { useReducer } from 'react';

const ProductListAPI = () => {
    const [hoveredProduct, setHoveredProduct] = useState();
    const {data, error, getAll} = useApi('https://crudapi.co.uk/api/v1/products');

    const VIEW_MODE = {
        NONE: 0,
        CREATE: 1,
        EDIT: 2,
        VIEW: 3
    };

    const ACTION_TYPES = {
        GET_PRODUCTS: 'GET_PRODUCTS',
        PRODUCTS_RECIEVED: 'PRODUCTS_RECIEVED',
        CREATE_PRODUCT: 'CREATE_PRODUCT',
        CREATED_PRODUCT: 'CREATED_PRODUCT',
        EDIT_PRODUCT: 'EDIT_PRODUCT',
        UPDATED_PRODUCT: 'UPDATED_PRODUCT',
        FETCH_ERROR: 'FETCH_ERROR',
    }

    // GOAL
    // 1. Set the initial COMPONENT GLOBAL state
    const initialState = {
        viewMode: VIEW_MODE.NONE,
        products: null,
        selectedProduct: null,
        hoveredProduct: null
    }

    // 2. Define the 'reducer' (the 'funnel') function - centralized controller actions and logic
    const reducer = (state, action) => {
        // Null all errors / exception

        switch (action.type) {
            case ACTION_TYPES.GET_PRODUCTS:
                getAll();
                return { ...state, errors: null }; // VIEW_MODE.CREATE
            case ACTION_TYPES.PRODUCTS_RECIEVED:
                return { ...state, viewMode: VIEW_MODE.NONE, products: action.payload, errors: null }; // VIEW_MODE.CREATE

            case ACTION_TYPES.CREATE_PRODUCT:
                return { ...state, viewMode: VIEW_MODE.CREATE }; // VIEW_MODE.CREATE
            case ACTION_TYPES.CREATED_PRODUCT:
                return { ...state, viewMode: VIEW_MODE.NONE, products: [...state.products, action.payload]};

            case ACTION_TYPES.EDIT_PRODUCT:
                return { ...state, viewMode: VIEW_MODE.EDIT, selectedProduct: action.payload }; // VIEW_MODE.EDIT
            case ACTION_TYPES.UPDATED_PRODUCT:
                return {
                    ...state,
                    viewMode: VIEW_MODE.NONE,
                    products: state.products.map(product => product.id === action.payload.id ? action.payload : product)
                }; // VIEW_MODE.UPDATED

            case ACTION_TYPES.FETCH_ERROR:
                return { ...state, errors: action.payload }; // VIEW_MODE.CREATE
            default:
                return state;
        }
    }

    // Initialize the 'useReducer'
    // 3. Define the 'useReducer' hook and send the 'reducer' function + the 'initialState' for ALL previous individual states
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        dispatch({type: ACTION_TYPES.GET_PRODUCTS});
    }, []);

    useEffect(() => {
        if (error) {
            dispatch({type: ACTION_TYPES.FETCH_ERROR, payload: error.message})
        }

        if (data) {
            dispatch({
                type: ACTION_TYPES.PRODUCTS_RECIEVED, 
                payload: data.items.map(product => new Product(
                    product.id,
                    product.name,
                    product.price
                ))
            });
        }
    }, [data, error, ACTION_TYPES.FETCH_ERROR, ACTION_TYPES.GET_PRODUCTS, ACTION_TYPES.PRODUCTS_RECIEVED]);

    if (state.errors) return <div>Error: {state.errors}</div>
    if (!state.products) return <div>Loading...</div>

    return (
        <div className='main'>

            <div className='mainPanel' onMouseLeave={() => setHoveredProduct(null)}>

                <button onClick={() => dispatch({ type: ACTION_TYPES.CREATE_PRODUCT})}>Create</button>

                { state.products.map(product => (
                    <div 
                    key={product.id}
                    className={`flex ${hoveredProduct && hoveredProduct.id === product.id ? 'hovered-product': ''}`}
                    onMouseEnter={() => setHoveredProduct(product)}>
                        <div>{product.id}</div>
                        <div>{product.name}</div>
                        <div>{product.price}</div>
                        <div>
                            { hoveredProduct && hoveredProduct.id === product.id && (
                                <button onClick={() => dispatch({type: ACTION_TYPES.EDIT_PRODUCT, payload: product})}>Edit</button>
                            )}
                        </div>
                    </div>
                ))}

            </div>

            { state.viewMode === VIEW_MODE.CREATE && (

                <div className='sidePanel' style={{width: '40%'}}>

                    <ProductNewValidations
                        onCreatedProduct={(product) => dispatch({type: ACTION_TYPES.CREATED_PRODUCT, payload: product})}/>

                </div>

            )}

            { state.viewMode === VIEW_MODE.EDIT && (

                <div className='sidePanel' style={{width: '40%'}}>

                    <ProductEdit
                        product={state.selectedProduct}
                        onUpdatedProduct={(product) => dispatch({type: ACTION_TYPES.UPDATED_PRODUCT, payload: product})}/>

                </div>

                )}

        </div>
    )
}

export default ProductListAPI;
