import { useState } from "react";
import './ProductList.css';
import { PRODUCTS } from "../../models/Product";
import ProductView from "./ProductView";
import ProductEditHook from "../forms/ProductEditHook";
import ProductNewHook from "../forms/ProductNewHook";

const ProductList = () => {

    const VIEW_MODE = {
        NONE: 0,
        CREATE: 1,
        EDIT: 2,
        VIEW: 3
    }
    
    const [viewMode, setViewMode] = useState(VIEW_MODE.NONE);
    const [selectedProduct, setSelectedProduct] = useState();
    const [hoveredProduct, setHoveredProduct] = useState(null);
    const [products, setProducts] = useState(PRODUCTS);

    const displayProduct = (product) => {
        setViewMode(VIEW_MODE.VIEW);
        setSelectedProduct(product)
    }

    const newProduct = () => {
        setViewMode(VIEW_MODE.CREATE);
    }

    const handleNewProduct = (newProduct) => {
        setViewMode(VIEW_MODE.NONE);
        setProducts([...products, newProduct]);
    }

    const handleUpdatedProduct = (updatedProduct) => {
        setViewMode(VIEW_MODE.NONE);
        const newProducts = [...products];
        
        setProducts(newProducts.map(p => {
            if (p.id === updatedProduct.id) return updatedProduct;
            return p;
        }));
    }

    const handleCloseProductView = () => {
        setViewMode(VIEW_MODE.NONE);
    }

    const editProduct = (e, product) => {
        e.stopPropagation();
        setViewMode(VIEW_MODE.EDIT);
        setSelectedProduct(product);
    }

    const handleHover = (product) => {
        setHoveredProduct(product);
    }

    if (!products) return <div>Loading...</div>

    return ( 
        <div className="main">

            <div className="mainPanel">

                <button onClick={() => newProduct()}>Create</button>

                { products.map(product => {
                    return (
                        <div 
                        key={product.id}
                        className={`flex ${hoveredProduct && hoveredProduct.id === product.id ? 'hoveredProduct' : ''}`}
                        onMouseEnter={() => handleHover(product)}
                        onClick={() => displayProduct(product)}>
                            <div>{product.id}</div>
                            <div>{product.name}</div>
                            <div>{product.price}</div>
                            <div>
                                { hoveredProduct && hoveredProduct.id === product.id && (
                                    <button onClick={(e) => editProduct(e, product)}>Edit</button>  
                                )}
                            </div>
                        </div>
                    )}
                )}

            </div>

            {/* CREATING */}
            { viewMode === VIEW_MODE.CREATE && (
                <div className="sidePanel">

                    <ProductNewHook onNewProduct={handleNewProduct}/>

                </div>
            )}
            
            {/* EDITING */}
            { viewMode === VIEW_MODE.EDIT && (
                <div className="sidePanel">

                    <ProductEditHook product={selectedProduct} onUpdatedProduct={handleUpdatedProduct}/>

                </div>
            )}

            {/* VIEWING */}
            { viewMode === VIEW_MODE.VIEW && (
                <div className="sidePanel">

                    <ProductView product={selectedProduct} onCloseProductView={handleCloseProductView}/>

                </div>
            )}

        </div>
     );
}
 
export default ProductList;