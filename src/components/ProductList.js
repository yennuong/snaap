import React, { Component } from 'react';

class ProductList extends Component {

    render() {
        return (
			<div className="pos-rel shop">
				<div className="filters-wrapper">
					<div className="sort"></div>
					<div className="filter"></div>
				</div>
				<div className="grid-wrapper">
					<div className="grid-container bump-flex-grid">
						{this.props.children}
					</div>
				</div>
			</div>
        );
    }
  
}

export default ProductList;
