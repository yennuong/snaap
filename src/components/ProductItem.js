import React, { Component } from 'react';
class ProductItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {
        let {product}   = this.props;
        return (
            <div className="item-container">
                <a href="http://localhost:3000/" className="item-image">
                    <img className="media-object" src={`images/${product.image}`} alt="{ product.name }" />
                </a>
                <div className="item-info">
                    <div className="item-title">{ product.name }</div>
                    <p className="item-price">{ product.price } đ</p>

                </div>
            </div>
        );
    }
}

export default ProductItem;