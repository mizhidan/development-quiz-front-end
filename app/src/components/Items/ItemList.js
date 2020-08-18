import React from 'react';
import Item from './Item';
import {Col, Row} from "antd";
import 'antd/dist/antd.css';

const url = "http://localhost:8080/items"

class ItemList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemList: [],
    };
  }

  componentDidMount() {
    fetch(url).then(result => {
      return result.json();
    }).catch(error => {
      console.log(error);
    }).then(json => {
      this.setState({itemList: json});
    })
  }

  render() {
    return (
      this.state.itemList.map((key, index) => {
        return (

            <Col span={6} key={index}>
          <Item name={this.state.itemList[index].name}
                pics={this.state.itemList[index].pics}
                price={this.state.itemList[index].price}
          />
            </Col>

          )

      })
    )
  }
}

export default ItemList;