import React, { useState } from 'react';

const ProductNewOneField = () => {
    const [personName, setName] = useState('');

    function handleSubmit(e) {
        e.preventDefault(); // Prevent the default form submit action
        console.log('Form submitted with name:', personName);
    }

    // const handleChange = (e) => {
    //     setName(e.target.value);
    // }

    const handleChange = (e, value) => {
        // setName(e.target.value);
        setName(value);
    }

    return ( 
        <div className="product-new-object">

            <h3>Product New - One Field</h3>

            <form onSubmit={handleSubmit}>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <label htmlFor="name">Person Name</label>
                            </td>
                            <td>
                                <input
                                    id="name"
                                    type="text"
                                    value={personName}
                                    // onChange={(e) => setName(e.target.value)}
                                    // onChange={handleChange}
                                    onChange={(e) => handleChange(e, e.target.value)}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button type="submit">Submit</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
     );
}
 
export default ProductNewOneField;