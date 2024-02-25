import React, { useState } from 'react';

function ProductNewObject() {
  const [product, setProduct] = useState({
    id: '',
    name: '',
    price: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProduct(prevProduct => ({
      ...prevProduct,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitting product:', product);
    // Here you could send the product to a server or handle it further
  };

  return (
    <div>

      <h3>Product New - Object</h3>

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

export default ProductNewObject;
