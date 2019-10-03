import React, { Component } from 'react';
class Search extends Component {
    render() {
        return (
            <div className="nav-item nav-right">
                <a className="notification">
                    <span className="icon"></span>
                    Notification
                </a>
                <a className="chat">
                    <span className="icon"></span>
                    Chat
                </a>
                <a className="cart">
                    <span className="icon"></span>
                    Cart
                </a>
                <a className="account">
                    <span className="icon"></span>
                    Account
                </a>
                <a className="sell">
                    <span className="icon"></span>
                    Sell
                </a>
            </div>
        );
    }
}

export default Search;