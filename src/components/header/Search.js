import React, { Component } from 'react';
class Nav extends Component {
    render() {
        return (
            <div className="search-container">
                <form>
                    <input className="search-input" placeholder="Search ..." type=""/>
                    <span className="search-icon"></span>
                </form>
            </div>
        );
    }
}

export default Nav;