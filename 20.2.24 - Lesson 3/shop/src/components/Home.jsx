import React, { Component } from 'react';
import ProductList from './products/ProductList';

class Home extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <ProductList/>
            </div>
        );
    }
}
 
export default Home;