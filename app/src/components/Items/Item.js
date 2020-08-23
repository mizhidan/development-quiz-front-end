import React from 'react';
import './Item.css';
import {Button} from "antd";
import 'antd/dist/antd.css';


class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          disabled: false
        }
    }

    handleClick(item) {
      this.setState({
        disabled: true
      })
      const data = {
        itemName: item,
        itemNumber: 1,
        price: this.props.price,
        itemUnit: this.props.itemUnit
      }
      const url = 'http://localhost:8080/orders';
      this.addOrder(url,data).then(r => {});
    }

    async addOrder(url,data) {
      const option = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      };
      await fetch(url,option)
        .catch(error => console.log(error));
      this.setState({
        disabled: false
      });
    }

    render() {
        return (
              <div className="single-item">
                <img src={this.props.pics} className="item-pic" alt="item picture" />
                <div className="item-info">
                  <h2>{this.props.name}</h2>
                  <p>单价：{this.props.price}元/{this.props.itemUnit}</p>
                </div>
                <Button
                  type="default"
                  shape="circle"
                  className="add-button"
                  onClick={this.handleClick.bind(this,this.props.name)}
                  key={this.props.name}
                  id={this.props.name}
                  disabled={this.state.disabled}
                >+</Button>
              </div>
        )
    }
}

export default Item;