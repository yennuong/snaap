import React, { Component } from 'react';

class CategoriesList extends Component {

    render() {
        return (
            <div className="categories">
                {this.props.children}
            </div>
        );
    }

}

export default CategoriesList;