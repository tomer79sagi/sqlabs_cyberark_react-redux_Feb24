import React, {useEffect} from 'react';
import useProductForm from '../../hooks/useProductForm';
import Product from '../../models/Product';
import useApi from '../../hooks/useApi';

const ProductNewValidations = ( { onCreatedProduct } ) => {
    const {product, errors, handleChange, handleSubmit} = useProductForm(new Product(), onCreatedProduct);
    const {data, loading, error, createOne} = useApi('https://crudapi.co.uk/api/v1/products');

    const handleNewSubmit = (e) => {
        if (handleSubmit(e)) { // validates
            const post = async () => {
                const productObj = [{
                        id: product.id,
                        name: product.name,
                        price: product.price
                    }];
                await createOne(productObj);
            };

            post();
        }
    }

    useEffect(() => {
        if (data && !loading && !error) {
            onCreatedProduct(data.items[0]);
        }
    }, [data, loading, error, onCreatedProduct]);

    return (
        <div>
            <h3>Product New - Validations</h3>
            <form onSubmit={(e) => handleNewSubmit(e)}>
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

export default ProductNewValidations
