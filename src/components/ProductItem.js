import React, { Component } from 'react';

import Helpers from './../libs/Helpers';
import Validate from './../libs/Validate';

import * as configs from './../constants/Config';

class ProductItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: 1,
        };
    }

    handleChange = (event) => {
        const target = event.target;    // input selectbox
        const value  = target.type === 'checkbox' ? target.checked : target.value;
        const name   = target.name;

        this.setState({
            [name]: value
        });
    }

    handleClick = (product) => {
        let quantity = +this.state.value;
        if(Validate.checkQuantity(quantity) === false){
            this.props.onChangeNotify(configs.NOTI_GREATER_THAN_ONE);
        }else{
            this.props.onBuyProduct(product, quantity);
            this.props.onChangeNotify(configs.NOTI_ACT_ADD);
        }
        this.setState({value: 1});
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
                    <p className="item-price">{ product.price }</p>

                </div>
            </div>
        );
    }
    
    showAreaBuy(product){
        let xhtml = null;
        let price = Helpers.toCurrency(product.price, "$", "left");

        if (product.canBuy === true){
            xhtml = <p>
                        <input name="value" type="number" value={this.state.value} onChange={this.handleChange} min={1} />
                        <a onClick={()=>this.handleClick(product)} type="button" className="price">{ price }</a>
                    </p>
        }else{
            xhtml = <span className="price">{ price }</span>
        }
        return xhtml;
    }
  
}

export default ProductItem;