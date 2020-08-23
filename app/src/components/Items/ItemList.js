import React from 'react';
import Item from './Item';
import {Col, Row} from "antd";
import 'antd/dist/antd.css';
import Items from './Items';


class ItemList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemList: [],
    };
  }

  render() {
    return (
      <div className="item-list">
        <Row>
          <Items />
        </Row>
      </div>
    )
  }
}

export default ItemList;