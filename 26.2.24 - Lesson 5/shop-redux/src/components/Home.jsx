import React, { Component } from 'react';
import ProductListAPI from './products/ProductListAPI';

class Home extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                {/* <ProductList/> */}
                <ProductListAPI/>
            </div>
        );
    }
}
 
export default Home;