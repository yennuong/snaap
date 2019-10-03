import React, { Component } from 'react';
import Sort from './Sort';
class ListFilter extends Component {
    render() {
        return (
            <div className="sort-box-holder">
                <Sort/>

                <div className="filter">Filter</div>
            </div>
        );
    }
}

export default ListFilter;

