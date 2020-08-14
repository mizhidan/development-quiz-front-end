import React from 'react';
import { BrowserRouter, Route, NavLink, Switch, Redirect } from 'react-router-dom';
import './Header.css';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <BrowserRouter>
                <div className="header">
                <ul className="nav-header">
                    <li><NavLink className="nav-link" exact to="/">商城</NavLink></li>
                    <li><NavLink className="nav-link" exact to="/order">订单</NavLink></li>
                    <li><NavLink className="nav-link" exact to="/additem">添加商品</NavLink></li>
                </ul>
                </div>
            </BrowserRouter>

        )
    }
}

export default Header;