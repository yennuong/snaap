import React, { Component } from 'react';
import Notification from "./Notification";
class Nav extends Component {
    render() {
        return (
            <div className="nav-item nav-right">
                <Notification/>
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

export default Nav;