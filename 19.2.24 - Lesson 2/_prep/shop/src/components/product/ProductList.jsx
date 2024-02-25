import { useState, useEffect } from "react";
import './ProductList.css';
import ProductEdit from "../forms/ProductEdit";
import Product, { PRODUCTS } from "../../shared/models/Product";
import ProductNewClassInstance from "../forms/ProductNewClassInstance";

const ProductList = () => {
    
    const [isEdit, setIsEdit] = useState(false);
    const [isCreate, setIsCreate] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState();
    const [products, setProducts] = useState(PRODUCTS);

    const displayProduct = (product) => {
        alert(product.name);
    }

    const newProduct = () => {
        setIsCreate(true);
        setIsEdit(false);
    }

    const handleNewProduct = (newProduct) => {
        console.log("reached");
        setProducts([...products, newProduct]);
    }

    const editProduct = (product) => {
        setSelectedProduct(product);
        setIsEdit(true);
        setIsCreate(false);
    }

    if (!products) return <div>Loading...</div>

    return ( 
        <div className="main">

            <div className="mainPanel">

                <button onClick={() => newProduct()}>Create</button>

                { products.map(product => (
                    <div className="flex" key={product.id} onClick={() => displayProduct(product)}>
                        <div>{product.name}</div>
                        <div>{product.price}</div>
                        <div>
                            <button onClick={() => editProduct(product)}>Edit</button>
                        </div>
                    </div>
                )) }

            </div>

            {/* CREATING */}
            { isCreate && !isEdit && (
                <div className="sidePanel">

                    <ProductNewClassInstance onNewProduct={handleNewProduct}/>

                </div>
            )}
            
            {/* EDITING */}
            { !isCreate && isEdit && (
                <div className="sidePanel">

                    <ProductEdit selectedProduct={selectedProduct}/>

                </div>
            )}

        </div>
     );
}
 
export default ProductList;