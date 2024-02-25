import React, { useState, useEffect } from 'react';
import Product from "../../models/Product";

const ProductEdit = (props) => {
    const [product, setProduct] = useState(props.product);

    function handleSubmit(e) {
        e.preventDefault(); // Prevent the default form submit action
        console.log('Form submitted with name:', product);
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        // Create a new Product instance for the updated state
        const updatedProduct = new Product(product.id, product.name, product.price);
        updatedProduct.updateField(name, value);
        setProduct(updatedProduct);
      };

    useEffect(() => {
        setProduct(props.product);
    }, [props.product]);

    return ( 
        <div>

        <h3>Product Edit</h3>
        <form onSubmit={handleSubmit}>
            <table>
              <tbody>
                <tr>
                    <td>
                      <label htmlFor="id">ID:</label>
                    </td>
                    <td>
                      <input
                        type="text"
                        id="id"
                        name="id"
                        value={product.id}
                        onChange={handleChange}
                      />
                    </td>
                </tr>
                <tr>
                    <td>
                      <label htmlFor="name">Name:</label>
                    </td>
                    <td>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={product.name}
                        onChange={handleChange}
                      />
                    </td>
                </tr>
                <tr>
                    <td>
                      <label htmlFor="price">Price:</label>
                    </td>
                    <td>
                      <input
                        type="text"
                        id="price"
                        name="price"
                        value={product.price}
                        onChange={handleChange}
                      />
                    </td>
                </tr>
                <tr>
                  <td colSpan="2" className='center'>
                      <button type="submit">Submit</button>
                  </td>
                </tr>
              </tbody>
          </table>
        </form>
  
      </div>
     );
}
 
export default ProductEdit;