import React, { useState, useEffect } from 'react';

function ProductView(props) {
    const [product, setProduct] = useState(props.product);

    const handleCloseProductView = () => {
        props.onCloseProductView();
    }

    useEffect(() => {
        setProduct(props.product);
    }, [props.product]);
    
    return ( 
        <div>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <label htmlFor="id">ID:</label>
                        </td>
                        <td>
                            { product.id || ''}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="name">Name:</label>
                        </td>
                        <td>
                            { product.name || '' }
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="price">Price:</label>
                        </td>
                        <td>
                            { product.price || ''}
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2" className='center'>
                            <button onClick={handleCloseProductView}>Close</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
     );
}
 
export default ProductView;