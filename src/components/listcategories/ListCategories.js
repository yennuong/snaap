import React, { Component } from 'react';
import {connect} from "react-redux";
import CategoriesList from "./CategoriesList";
import CategoriesItem from "./CategoriesItem";
class ListCategories extends Component {
    render() {
        let {categories}   = this.props;
        console.log('categories',categories);
        return (
            <CategoriesList>
                {this.showElementCategories(categories)}
            </CategoriesList>
        );
    }

    showElementCategories(categories){
        let xhtml  = "";
        if(categories.length > 0 ){
            xhtml = categories.map((categories, index)=> {
                return (
                    <CategoriesItem
                        key={index}
                        categories={categories} index={index}
                    />
                );
            });
        }
        return xhtml;
    }
}
const mapStateToProps = state => {
    return {
        categories: state.categories
    }
}
export default connect(mapStateToProps, null)(ListCategories);

