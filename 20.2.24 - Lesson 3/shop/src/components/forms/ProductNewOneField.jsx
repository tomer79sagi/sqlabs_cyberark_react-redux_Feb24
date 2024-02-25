import { useState } from "react";

const ProductNewOneField = () => {
    const [productName, setProductName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted with name:', productName);
    }

    const handleChange = (e, name) => {
        console.log('name:', name);
        setProductName(e.target.value);
    }
    
    return ( 
        <div>

            <h3>Product New - One Field</h3>

            <form onSubmit={handleSubmit}>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <label htmlFor="productName">Product Name</label>
                            </td>
                            <td>
                                <input 
                                    id="productName"
                                    type="text"
                                    name=""
                                    value={productName}
                                    onChange={(e) => handleChange(e, 'Tomer')}
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
     );
}
 
export default ProductNewOneField;