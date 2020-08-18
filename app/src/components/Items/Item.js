import React from 'react';
import './Item.css';
import {Button} from "antd";
import 'antd/dist/antd.css';


class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (

              <div className="single-item">
                <img src={this.props.pics} className="item-pic" alt="item picture" />
                <div className="item-info">
                  <h2>{this.props.name}</h2>
                  <p>单价：{this.props.price}元/瓶</p>
                </div>
                <Button type="default" shape="circle" className="add-button">+</Button>
              </div>
        )
    }
}

export default Item;