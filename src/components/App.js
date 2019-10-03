import React, { Component } from 'react';
import Header from './header/Header';
import ListCategories from './listcategories/ListCategories';
import ListFilter from './listFilter/ListFilter';
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
                            <ListFilter/>
                            <ProductsContainer />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;

