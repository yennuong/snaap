import React, { Component } from 'react';
import logo from './images/logo.svg';
import Search from './Search';
import Nav from './nav-right/Nav';
class Header extends Component {
    render() {
        return (
            <header >
                <div className="header content">
                    <div className="inner">
                        <div className="logo">
                            <img src={logo} className="App-logo" alt="logo" />
                        </div>
                        <Search/>
                        <Nav />
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
