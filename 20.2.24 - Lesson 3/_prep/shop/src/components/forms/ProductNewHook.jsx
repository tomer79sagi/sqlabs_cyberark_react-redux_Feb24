import React from 'react';
import useProductFormValidations from '../../hooks/useProductFormValidations';

function ProductNewHook( {onNewProduct} ) {
  const { product, errors, handleChange, handleSubmit } = useProductFormValidations();

  const handleNewSubmit = (e) => {
    const isValid = handleSubmit(e);
    if (isValid && onNewProduct) {
      onNewProduct(product);
    }
  }

  return (
    <div>

      <h3>Product New - Hook</h3>
      <form onSubmit={handleNewSubmit}>
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
                    <button type="submit">Create</button>
                </td>
              </tr>
            </tbody>
        </table>
      </form>

    </div>
  );
}

export default ProductNewHook;
