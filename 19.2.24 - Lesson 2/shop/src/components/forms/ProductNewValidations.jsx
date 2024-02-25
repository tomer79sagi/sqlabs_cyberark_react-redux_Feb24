import React from 'react';
import Product from '../../models/Product';
import { useState } from 'react';

const ProductNewValidations = () => {
    const [product, setProduct] = useState(new Product());
    const [errors, setErrors] = useState({})

    const handleChange = (e) => {
        const {name, value} = e.target;
        const updatedProduct = new Product(product.id, product.name, product.price);

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
        } else {
            console.log('Form is invalid.');
            console.log(validationErrors);
        }
    }

    return (
        <div>
            <h3>Product New - Validations</h3>
            <form onSubmit={handleSubmit}>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <label htmlFor="id">ID</label>
                            </td>
                            <td>
                                <input 
                                    id="id"
                                    name="id"
                                    type="text"
                                    onChange={handleChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="name">Name</label>
                            </td>
                            <td>
                                <input 
                                    id="name"
                                    name="name"
                                    type="text"
                                    onChange={handleChange}
                                />
                                { errors['name'] && <div style={ {color: 'red'} }>{ errors['name'] }</div> }
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="price">Price</label>
                            </td>
                            <td>
                                <input 
                                    id="price"
                                    name="price"
                                    type="text"
                                    onChange={handleChange}
                                />
                                { errors['price'] && <div style={ {color: 'red'} }>{ errors['price'] }</div> }
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <button type="submit">Submit Form</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    )
}

export default ProductNewValidations
