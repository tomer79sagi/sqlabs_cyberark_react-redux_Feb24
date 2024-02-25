import ProductNewClassInstance from "./ProductNewClassInstance";
import ProductNewObject from "./ProductNewObject";
import ProductNewOneField from "./ProductNewOneField";
import ProductEdit from "./ProductEdit";
import './FormsMain.css';
import { PRODUCTS } from "../../shared/models/Product";
import { useEffect, useState } from "react";
import ProductNewValidations from "./ProductNewValidations";
import ProductNewSharedValidations from "./ProductNewSharedValidations";

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
            <button onClick={() => randomProduct()}>Random Product</button>
            <ProductEdit product={product}/>
        </div>
     );
}
 
export default FormsMain;