import React from 'react'
import { useEffect } from 'react';
import useProductForm from '../../hooks/useProductForm';

const ProductEdit = (props) => {
    const {product, setProduct, errors, handleChange, handleSubmit} = useProductForm(props.product, props.onUpdatedProduct);

    const handleUpdateSubmit = (e) => {
        if (handleSubmit(e)) { // validates
            const productObj = {
                id: product.id,
                name: product.name,
                price: product.price,
                _uuid: props.product._uuid
            };

            props.onUpdatedProduct(productObj);
        }
    }

    useEffect(() => {
        setProduct(props.product);
    }, [props.product, setProduct]);

    return (
        <div>
            <h3>Product New - Validations</h3>
            <form onSubmit={handleUpdateSubmit}>

                <input 
                    id="_uuid"
                    name="_uuid"
                    type="hidden"
                    value={product._uuid ? product._uuid : -1}
                />

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
                                    value={product.id ? product.id : -1}
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
                                    value={product.name ? product.name : ''}
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
                                    value={product.price ? product.price : 0}
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

export default ProductEdit
