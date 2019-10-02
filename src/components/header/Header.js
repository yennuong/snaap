import React, { Component } from 'react';
//import logo from './images/logo.svg';
class Header extends Component {
    render() {
        return (
            <header >
                <div className="logo">
                    {/*<img src={logo} className="App-logo" alt="logo" />*/}
                    abc
                </div>
                <div className="search-container">
                    <form>
                        <input className="search-input" placeholder="Search ..." type=""/>
                        <span className="search-icon"></span>
                    </form>
                </div>
                <div className="nav-item nav-right">

                </div>
            </header>
        );
    }
}

export default Header;
