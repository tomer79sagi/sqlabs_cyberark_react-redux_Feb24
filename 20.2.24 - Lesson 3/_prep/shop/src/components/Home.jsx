import React, { Component } from 'react';
import ProductList from './product/ProductList';
import ProductListAPI from './product/ProductListAPI';
import ProductListReducer from './product/ProductListReducer';

class Home extends Component {
    state = {  } 
    render() { 
        return (
            <div className='center'>
                {/* <ProductList/> */}
                <ProductListAPI/>
                {/* <ProductListReducer/> */}
            </div>
        );
    }
}
 
export default Home;