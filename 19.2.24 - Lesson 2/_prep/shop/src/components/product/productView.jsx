import React, { useState } from 'react';

const ProductNew = (props) => {
    const [selectedProduct, setSelectedProduct] = useState(props.product);

    function handleSubmit(e) {
        e.preventDefault(); // Prevent the default form submit action
        console.log('Form submitted with name:', personName);
    }

    return ( 
        <div>
            <label>
                Person Name:
                value={personName}
            </label>
        </div>
     );
}
 
export default ProductNew;