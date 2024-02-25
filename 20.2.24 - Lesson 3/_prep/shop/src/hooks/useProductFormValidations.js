import { useState } from 'react';
import Product from '../models/Product';

// Assuming Product class is defined elsewhere and imported
// import Product from 'path/to/Product';

const useProductFormValidations = (initialProduct = new Product()) => {
  const [product, setProduct] = useState(initialProduct);
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    const updatedProduct = new Product(product.id, product.name, product.price);
    updatedProduct.updateField(name, value);
    setProduct(updatedProduct);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = product.validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log('Form is valid');
      console.log('Submitting product:', product);
      // Perform further actions like sending data to an API
      return true;
    } else {
      console.log('Form has errors', validationErrors);
      return false;
    }
  };

  return { product, setProduct, errors, handleChange, handleSubmit };
};

export default useProductFormValidations;
