import Product from "../models/Product";
import { useState } from "react";

const useProductForm = (initialValue = new Product(), callback) => {
    const [product, setProduct] = useState(new Product());
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const {name, value} = e.target;
        const updatedProduct = product ? new Product(product.id, product.name, product.price, product._uuid) : new Product();

        updatedProduct.updateField(name, value);
        setProduct(updatedProduct);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = product.validate();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            console.log('Form is valid.');
            console.log('Form submitted with name:', product);
            // callback(product);
            return true;
        } else {
            console.log('Form is invalid.');
            console.log(validationErrors);
            return false;
        }
    }

    return {product, setProduct, callback, errors, handleChange, handleSubmit};
}

export default useProductForm;