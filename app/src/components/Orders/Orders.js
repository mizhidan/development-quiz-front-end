import React from "react";
import {Button,ConfigProvider, Table, notification} from 'antd';

import 'antd/dist/antd.css';

const url = "http://localhost:8080/orders"

const customizeRenderEmpty = () => (
  <div style={{ textAlign: 'center' }}>
    <span>暂无订单，返回</span><a href="/">商城页面</a><span>购买</span>
  </div>
);

class Orders extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
      current: 'orders',
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
      .catch(() =>
        this.openNotification())
      .then(() => this.deleteRow())
  }

  deleteRow() {
    fetch(url)
      .then(result => {
        return result.json()
      })
      .catch(error => {
        console.log(error)
      })
      .then(json => {
        this.setState({
          dataSource: json
        })
      })
  }

  openNotification = () => {
    notification.open({
      message: '订单删除失败',
      description:
        '订单删除失败，请稍后再试',
    });
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
        <ConfigProvider renderEmpty={customizeRenderEmpty}>
        <Table
          dataSource={this.state.dataSource}
          columns={columns}
          pagination={false}
          key="order-table"
        />;
        </ConfigProvider>
      </div>
    );
  }
}

export default Orders;