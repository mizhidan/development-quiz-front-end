import React from "react";
import {Button, Table} from 'antd';

import 'antd/dist/antd.css';

const url = "http://localhost:8080/orders"

class Orders extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
    };
  }

  componentDidMount() {
    fetch(url)
      .then(result => {
        return result.json()
      })
      .catch(error => {
        console.log(error);
      })
      .then(json => {
        this.setState({
          dataSource: json
        })
        console.log(this.state.dataSource)
      })
  }

  handleClick(id) {
    const option = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
    };
    fetch(url+"/"+id, option)
      .then(response => response.json())
      .catch(error => console.log(error))
      .then(() => this.deleteRow(id))
  }

  deleteRow(id) {
    this.state.dataSource.forEach((item, index) => {
      if (item.id === id) {
        delete this.state.dataSource[index];
      }
    })
    fetch(url)
      .then(result => {
        return result.json()
      })
      .catch(error => {
        console.log(error);
      })
      .then(json => {
        this.setState({
          dataSource: json
        })
        console.log(this.state.dataSource)
      })
  }

  render() {
    const columns = [
      {
        title: '名字',
        dataIndex: 'itemName',
        key: 'name'
      },
      {
        title: '单价',
        dataIndex: 'price',
        key: 'price'
      },
      {
        title: '数量',
        dataIndex: 'itemNumber',
        key: 'number'
      },
      {
        title: '单位',
        dataIndex: 'itemUnit',
        key: 'numberUnit'
      },
      {
        title: '操作',
        key: 'action',
        render: (record) => (
          <Button type="default " danger onClick={() => this.handleClick(record.id)}><span>删除</span></Button>
        )
      }
    ]
    return (
      <div className="table">
        <Table
          dataSource={this.state.dataSource}
          columns={columns}
          pagination={false}
          locale={
            {emptyText: '暂无订单，返回商城页面继续购买'}
          }
        />;
      </div>
    );
  }
}

export default Orders;