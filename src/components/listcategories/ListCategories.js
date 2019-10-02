import React, { Component } from 'react';
import {connect} from "react-redux";

class ListCategories extends Component {
    render() {
        let {categories}   = this.props;
        console.log(categories);
        return (
            <div className="categories">
                <div className="categories__item ">
                    <a>
                        <span className="icon"></span>
                        {/*<span className="icon">{ categories.name }</span>*/}
                    </a>
                </div>
                <div className="categories__item ">
                    <a>
                        <span className="icon"></span>
                        <span className="icon">Men Fashion</span>
                    </a>
                </div>
                <div className="categories__item ">
                    <a>
                        <span className="icon"></span>
                        <span className="icon">Men Fashion</span>
                    </a>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    console.log('state',state);
    return {
        categories: state.categories
    }
}
export default connect(mapStateToProps, null)(ListCategories);

