import React, { Component } from 'react';
import ProductList from './product/ProductList';

class Home extends Component {
    state = {  } 
    render() { 
        return (
            <div className='center'>
                <ProductList/>
            </div>
        );
    }
}
 
export default Home;