import ProductNewClassInstance from "./ProductNewClassInstance";
import ProductNewObject from "./ProductNewObject";
import ProductNewOneField from "./ProductNewOneField";
import ProductEdit from "./ProductEdit";
import './FormsMain.css';
import { PRODUCTS } from "../../models/Product";
import { useEffect, useState } from "react";
import ProductNewValidations from "./ProductNewValidations";
import ProductNewSharedValidations from "./ProductNewSharedValidations";
import ProductEditHook from "./ProductEditHook";
import ProductNewHook from "./ProductNewHook";

const FormsMain = () => {
    const [product, setProduct] = useState(null);

    const randomProduct = () => {
        setProduct(PRODUCTS[Math.floor(Math.random() * 20)]);
    }

    // Empty dependecy array = runs on mount
    useEffect(() => {
        console.log('useEffect')
        randomProduct();
    }, []);

    if (!product) return <div>Loading...</div>

    return ( 
        <div className="form-main">
            <ProductNewOneField/>
            <hr/>
            <ProductNewObject/>
            <hr/>
            <ProductNewClassInstance/>
            <hr/>
            <ProductNewValidations/>
            <hr/>
            <ProductNewSharedValidations/>
            <hr/>
            <div style={{ border: '1px solid blue', textAlign: 'center'}}>
                <h2>Product Edit</h2>
                <button onClick={() => randomProduct()}>Random Product</button>
                <ProductEdit product={product}/>
            </div>
            <hr/>
            <div style={{ border: '1px solid blue', textAlign: 'center'}}>
                <h2>Hooks</h2>
                <ProductNewHook/>
                <hr/>
                <ProductEditHook product={product}/>
            </div>
        </div>
     );
}
 
export default FormsMain;