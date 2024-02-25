import React from 'react';
import useProductForm from '../../hooks/useProductForm';
import Product from '../../models/Product';

const ProductNewValidations = ( { onCreatedProduct } ) => {
    const {errors, handleChange, handleSubmit} = useProductForm(new Product(), onCreatedProduct);

    const handleNewSubmit = (e) => {
        if (handleSubmit(e)) {
            // Do other validations
        }
    }

    return (
        <div>
            <h3>Product New - Validations</h3>
            <form onSubmit={(e) => handleNewSubmit(e)}>
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
