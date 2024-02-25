import './ProductList.css';
import axios from 'axios';
import { useState, useEffect } from "react";

const ProductList = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
  
    useEffect(() => {
      const fetchProducts = async () => {
        try {
          const response = await axios.get('https://fakestoreapi.com/products');
          setProducts(response.data);
        } catch (err) {
          setError('Failed to fetch products');
          console.error(err);
        } finally {
          setLoading(false);
        }
      };
  
      fetchProducts();
    }, []); // Empty dependency array means this effect runs only once after the initial render
  
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
  
    return (
      <div>
        <h2>Products</h2>
        <ul>
          {products.map(product => (
            <li key={product.id}>
              <h3>{product.title}</h3>
              <p>${product.price}</p>
              <img src={product.image} alt={product.title} style={{width: '100px', height: 'auto'}} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
 
export default ProductList;