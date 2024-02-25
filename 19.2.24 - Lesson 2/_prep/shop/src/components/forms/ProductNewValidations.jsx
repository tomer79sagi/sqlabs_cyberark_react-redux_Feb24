import React, { useState } from 'react';
import Product from '../../shared/models/Product'; // Adjust the path as necessary

function ProductNewValidations() {
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
    if (validateForm()) {
      console.log('Form is valid');
      console.log('Submitting product:', product);
      // Perform further actions like sending data to an API
    } else {
      console.log('Form has errors');
    }
  };

  // Validate form inputs
  const validateForm = () => {
    let errors = {};
    let formIsValid = true;

    // Name validation
    if (!product.name) {
      formIsValid = false;
      errors["name"] = "Product name cannot be empty";
    }

    // Price validation
    if (!product.price) {
      formIsValid = false;
      errors["price"] = "Price cannot be empty";
    } else if (isNaN(product.price) || Number(product.price) <= 0) {
      formIsValid = false;
      errors["price"] = "Price must be a positive number";
    }

    setErrors(errors);
    return formIsValid;
  }

  return (
    <div>

      <h3>Product New - Validations</h3>
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

export default ProductNewValidations;
