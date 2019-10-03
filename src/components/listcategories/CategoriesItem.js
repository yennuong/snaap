import React, { Component } from 'react';
class CategoriesItem extends Component {

    render() {
        let {categories}   = this.props;
        console.log('categoriesItem',categories);
        return (
            <div className="categories__item ">
                <a>
                    <span className="icon"></span>
                    <span>{categories.name}</span>
                </a>
            </div>
        );
    }

}

export default CategoriesItem;