import React, { useReducer } from "react";
import './ProductList.css';
import { PRODUCTS } from "../../models/Product";
import ProductView from "./ProductView";
import ProductEditHook from "../forms/ProductEditHook";
import ProductNewHook from "../forms/ProductNewHook";

const initialState = {
    viewMode: 0, // Assuming VIEW_MODE.NONE is 0
    selectedProduct: undefined,
    hoveredProduct: null,
    products: PRODUCTS,
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'DISPLAY_PRODUCT':
            return { ...state, viewMode: 3, selectedProduct: action.payload }; // VIEW_MODE.VIEW
        case 'NEW_PRODUCT':
            return { ...state, viewMode: 1 }; // VIEW_MODE.CREATE
        case 'ADD_PRODUCT':
            return { ...state, viewMode: 0, products: [...state.products, action.payload] }; // VIEW_MODE.NONE
        case 'UPDATE_PRODUCT':
            return {
                ...state,
                viewMode: 0,
                products: state.products.map(product => product.id === action.payload.id ? action.payload : product),
            }; // VIEW_MODE.NONE
        case 'CLOSE_VIEW':
            return { ...state, viewMode: 0 }; // VIEW_MODE.NONE
        case 'EDIT_PRODUCT':
            return { ...state, viewMode: 2, selectedProduct: action.payload }; // VIEW_MODE.EDIT
        case 'HOVER_PRODUCT':
            return { ...state, hoveredProduct: action.payload };
        default:
            return state;
    }
};

const ProductList = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { viewMode, selectedProduct, hoveredProduct, products } = state;

    const VIEW_MODE = {
        NONE: 0,
        CREATE: 1,
        EDIT: 2,
        VIEW: 3
    };

    if (!products) return <div>Loading...</div>

    return (
        <div className="main">
            <div className="mainPanel">
                <button onClick={() => dispatch({ type: 'NEW_PRODUCT' })}>Create</button>
                {products.map(product => (
                    <div 
                        key={product.id}
                        className={`flex ${hoveredProduct && hoveredProduct.id === product.id ? 'hoveredProduct' : ''}`}
                        onMouseEnter={() => dispatch({ type: 'HOVER_PRODUCT', payload: product })}
                        onClick={() => dispatch({ type: 'DISPLAY_PRODUCT', payload: product })}>
                        <div>{product.id}</div>
                        <div>{product.name}</div>
                        <div>{product.price}</div>
                        <div>
                            {hoveredProduct && hoveredProduct.id === product.id && (
                                <button onClick={(e) => {
                                    e.stopPropagation();
                                    dispatch({ type: 'EDIT_PRODUCT', payload: product });
                                }}>Edit</button>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {viewMode === VIEW_MODE.CREATE && (
                <div className="sidePanel">
                    <ProductNewHook onNewProduct={(product) => dispatch({ type: 'ADD_PRODUCT', payload: product })} />
                </div>
            )}
            
            {viewMode === VIEW_MODE.EDIT && (
                <div className="sidePanel">
                    <ProductEditHook product={selectedProduct} onUpdatedProduct={(product) => dispatch({ type: 'UPDATE_PRODUCT', payload: product })} />
                </div>
            )}

            {viewMode === VIEW_MODE.VIEW && (
                <div className="sidePanel">
                    <ProductView product={selectedProduct} onCloseProductView={() => dispatch({ type: 'CLOSE_VIEW' })} />
                </div>
            )}
        </div>
    );
};

export default ProductList;
