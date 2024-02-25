import React, { useState } from 'react';
import Product from '../../shared/models/Product'; // Adjust the path as necessary

function ProductNewClassInstance( { onNewProduct } ) {
  // Initialize state with a new Product instance
  const [product, setProduct] = useState(new Product());

  const handleChange = (event) => {
    const { name, value } = event.target;
    // Create a new Product instance for the updated state
    const updatedProduct = new Product(product.id, product.name, product.price);
    updatedProduct.updateField(name, value);
    setProduct(updatedProduct);
  };

  const sendDataToParent = () => {
    if (onNewProduct) onNewProduct(product);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    sendDataToParent(product);
    console.log('Submitting product:', product);
    // Submit the product instance as needed
  };

  return (
    <div>

      <h3>Product New - Class Instance</h3>
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

export default ProductNewClassInstance;
