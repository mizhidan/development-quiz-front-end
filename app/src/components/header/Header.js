import React from 'react';
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom';
import { HomeOutlined,ShoppingCartOutlined,PlusOutlined } from '@ant-design/icons';
import {Menu} from "antd";
import ItemList from "../Items/ItemList";
import AddItem from "../AddItem/AddItem";
import Orders from "../Orders/Orders";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          theme: 'dark',
          current: 'mall'
        };
    }

    componentDidMount() {
      console.log(this.props)
    }

  handleClick = e => {
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
                <NavLink className="nav-link" exact to="/orders">订单</NavLink>
              </Menu.Item>
              <Menu.Item key="add-item" icon={<PlusOutlined />} onClick={this.handleClick}>
                <NavLink className="nav-link" exact to="/add-item">添加商品</NavLink>
              </Menu.Item>
            </Menu>
            <Switch>
              <Route exact path='/' component={ItemList}/>
              <Route exact path='/orders' component={Orders}/>
              <Route exact path='/add-item' component={AddItem}/>
            </Switch>
            </BrowserRouter>
        )
    }
}

export default Header;