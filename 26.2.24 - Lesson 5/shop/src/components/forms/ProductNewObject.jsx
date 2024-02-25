import React from 'react'
import { useState } from 'react';

const ProductNewObject = () => {
    const [product, setProduct] = useState({
        id: -1,
        name: '',
        price: 0
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted with name:', product);
    }

    const handleChange = (e) => {
        const {name, value} = e.target;

        setProduct(prevProduct => ({
            ...prevProduct,
            [name]: value
        }));
    }

  return (
    <div>
        <h3>Product New - Object</h3>
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
                                value={product.id}
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
                                value={product.name}
                                onChange={handleChange}
                            />
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
                                value={product.price}
                                onChange={handleChange}
                            />
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

export default ProductNewObject;
