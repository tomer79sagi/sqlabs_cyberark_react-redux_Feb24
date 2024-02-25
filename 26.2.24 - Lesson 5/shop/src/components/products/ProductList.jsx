import React, {useState} from 'react';
import { PRODUCTS } from '../../models/Product';
import './ProductList.css';
import ProductNewValidations from '../forms/ProductNewValidations';
import ProductEdit from '../forms/ProductEdit';

import { useReducer } from 'react';

const ProductList = () => {
    const [hoveredProduct, setHoveredProduct] = useState();

    const VIEW_MODE = {
        NONE: 0,
        CREATE: 1,
        EDIT: 2,
        VIEW: 3
    };

    const ACTION_TYPES = {
        CREATE_PRODUCT: 'CREATE_PRODUCT',
        CREATED_PRODUCT: 'CREATED_PRODUCT',
        EDIT_PRODUCT: 'EDIT_PRODUCT',
        UPDATED_PRODUCT: 'UPDATED_PRODUCT',
    }

    // GOAL
    // 1. Set the initial COMPONENT GLOBAL state
    const initialState = {
        viewMode: VIEW_MODE.NONE,
        products: PRODUCTS,
        selectedProduct: null,
        hoveredProduct: null
    }

    // 2. Define the 'reducer' (the 'funnel') function - centralized controller actions and logic
    const reducer = (state, action) => {
        switch (action.type) {
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
            default:
                return state;
        }
    }

    // Initialize the 'useReducer'
    // 3. Define the 'useReducer' hook and send the 'reducer' function + the 'initialState' for ALL previous individual states
    const [state, dispatch] = useReducer(reducer, initialState);

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

export default ProductList;
