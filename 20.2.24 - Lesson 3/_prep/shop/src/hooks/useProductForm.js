import { useState, useEffect } from 'react';
import Product from '../models/Product';

// Assuming Product class is defined elsewhere and imported
// import Product from 'path/to/Product';

function useProductForm(initialProduct) {
  const [product, setProduct] = useState(initialProduct);

  useEffect(() => {
    setProduct(initialProduct);
  }, [initialProduct]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    const updatedProduct = new Product(product.id, product.name, product.price);
    updatedProduct.updateField(name, value);
    setProduct(updatedProduct);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted with name:', product);
    // Additional form submission logic can go here
  };

  return { product, handleChange, handleSubmit };
}

export default useProductForm;
