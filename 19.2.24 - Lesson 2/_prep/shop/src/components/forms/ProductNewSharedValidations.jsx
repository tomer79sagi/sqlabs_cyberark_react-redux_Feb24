import React, { useState } from 'react';
import Product from '../../shared/models/Product'; // Adjust the path as necessary

function ProductNewSharedValidations() {
  // Initialize state with a new Product instance
  const [product, setProduct] = useState(new Product());
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    // Create a new Product instance for the updated state
    const updatedProduct = new Product(product.id, product.name, product.price);
    updatedProduct.updateField(name, value);
    setProduct(updatedProduct);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(product.validate());

    if (errors) {
      console.log('Form is valid');
      console.log('Submitting product:', product);
      // Perform further actions like sending data to an API
    } else {
      console.log('Form has errors');
    }
  };

  return (
    <div>

      <h3>Product New - Shared Validations</h3>
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
                    {errors.name && <div style={{ color: "red" }}>{errors.name}</div>}
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
                    {errors.price && <div style={{ color: "red" }}>{errors.price}</div>}
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

export default ProductNewSharedValidations;
