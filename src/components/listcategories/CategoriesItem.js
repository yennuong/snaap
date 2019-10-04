import React, { Component } from 'react';
class CategoriesItem extends Component {

    render() {
        let {categories}   = this.props;
        return (
            <div className="categories__item ">
                <a>
                    <span className="icon"><img src={`images/categories/${categories.image}`} alt="{ categories.name }" /></span>
                    <span>{categories.name}</span>
                </a>
            </div>
        );
    }

}

export default CategoriesItem;