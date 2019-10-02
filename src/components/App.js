import React, { Component } from 'react';
import Header from './header/Header';
import ListCategories from './listcategories/ListCategories';
import ProductsContainer from './../containers/ProductsContainer';
import Cart from './Cart';
class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className="page-main">
                    <div className="columns">
                        <div className="column main">
                            <ListCategories/>
                            <ProductsContainer />
                        </div>
                    </div>
                </div>
                <ListCategories/>
                <ProductsContainer />
                <div className="row">
                	{/*<ProductsContainer />*/}
                	{/*<Cart />*/}
                </div>
            </div>
        );
    }
}

export default App;

