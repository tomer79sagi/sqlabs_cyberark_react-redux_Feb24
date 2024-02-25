import React, { useEffect } from 'react';
import useProductFormValidations from '../../hooks/useProductFormValidations';

const ProductEditHook = ( props ) => {
  const { product, setProduct, errors, handleChange, handleSubmit } = useProductFormValidations(props.product);

  const handleUpdateSubmit = (e) => {
    const isValid = handleSubmit(e);
    if (isValid && props.onUpdatedProduct) {
      props.onUpdatedProduct(product);
    }
  }

  useEffect(() => {
    setProduct(props.product);
  }, [props.product, setProduct]);

    return ( 
        <div>

        <h3>Product Edit - Hook</h3>
        <form onSubmit={handleUpdateSubmit}>
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
                        value={product.id || ''}
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
                        value={product.name || ''}
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
                        value={product.price}
                        onChange={handleChange}
                      />
                      {errors.price && <div style={{ color: "red" }}>{errors.price}</div>}
                    </td>
                </tr>
                <tr>
                  <td colSpan="2" className='center'>
                      <button type="submit">Update</button>
                  </td>
                </tr>
              </tbody>
          </table>
        </form>
  
      </div>
     );
}
 
export default ProductEditHook;