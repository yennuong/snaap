import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ProductItem from './../components/ProductItem';
import ProductList from './../components/ProductList';
import {orderBy as funcOrderBy } from 'lodash';

class ProductsContainer extends Component {

    render() {
        let {products, sort} = this.props;
        let {orderBy, orderDir}   = sort;

        // Sort
        products = funcOrderBy(products, [orderBy], [orderDir]);
        return (
            <ProductList>
                {this.showElementProduct(products)}
            </ProductList>
        );
    }

    showElementProduct(products){
        let xhtml;
        if(products.length > 0 ){
            xhtml = products.map((product, index)=> {
                return (
                    <ProductItem
                        key={index}
                        product={product} index={index}
                    />
                );
            });
        }
        return xhtml;
    }

  
}

ProductsContainer.propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        summary: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        canBuy: PropTypes.bool.isRequired,
    })).isRequired
}

const mapStateToProps = state => {
    return {
        products: state.products,
        sort: state.sort,
    }
}


export default connect(mapStateToProps, null)(ProductsContainer);