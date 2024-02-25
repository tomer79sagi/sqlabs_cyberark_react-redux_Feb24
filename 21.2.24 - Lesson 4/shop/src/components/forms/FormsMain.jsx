import ProductEdit from "./ProductEdit";
import ProductNewClassInstance from "./ProductNewClassInstance";
import ProductNewObject from "./ProductNewObject";
import ProductNewOneField from "./ProductNewOneField";
import ProductNewValidations from "./ProductNewValidations";
import { PRODUCTS } from "../../models/Product";
import { useState, useEffect } from "react";

 const FormsMain = () => {
    const [product, setProduct] = useState();

    const randomProduct = () => {
        setProduct(PRODUCTS[Math.floor(Math.random() * PRODUCTS.length)]);
    }

    // Empty dependecy array = runs on mount
    useEffect(() => {
        console.log('useEffect')
        randomProduct();
    }, []);

    if (!product) return <div>Loading...</div>

    return ( 
        <div>
            <h1>Forms</h1>
            <ProductNewOneField/>
            <hr/>
            <ProductNewObject/>
            <hr/>
            <ProductNewClassInstance/>
            <hr/>
            <ProductNewValidations/>
            <hr/>
            <button onClick={() => randomProduct()}>Random Product</button>
            <ProductEdit product={product}/>
        </div>
     );
 }
  
 export default FormsMain;