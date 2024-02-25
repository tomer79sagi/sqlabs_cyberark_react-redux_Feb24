import React, { Component } from 'react';
import ProductList from './productList';

class Home extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                Home!
                <ProductList/>
            </div>
        );
    }
}
 
export default Home;