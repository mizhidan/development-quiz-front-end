import React from 'react';
import { BrowserRouter, Route, NavLink, Switch, Redirect } from 'react-router-dom';
import { HomeOutlined,ShoppingCartOutlined,PlusOutlined } from '@ant-design/icons';
import {Menu} from "antd";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          theme: 'dark',
          current: 'mall'
        };
    }

  handleClick = e => {
    console.log('click ', e);
    this.setState({ current: e.key });
  };

    render() {
      const { current } = this.state;
        return (
          <BrowserRouter>
            <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal" theme={this.state.theme}>
              <Menu.Item key="mall" icon={<HomeOutlined />} onClick={this.handleClick}>
                <NavLink className="nav-link" exact to="/">商城</NavLink>
              </Menu.Item>
              <Menu.Item key="orders" icon={<ShoppingCartOutlined />} onClick={this.handleClick}>
                <NavLink className="nav-link" exact to="/order">订单</NavLink>
              </Menu.Item>
              <Menu.Item key="add-item" icon={<PlusOutlined />} onClick={this.handleClick}>
                <NavLink className="nav-link" exact to="/additem">添加商品</NavLink>
              </Menu.Item>
            </Menu>
            </BrowserRouter>
        )
    }
}

export default Header;