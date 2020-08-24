import React from "react";
import {Button, Form, notification} from "antd";
import {Input} from "antd";
import "./AddItem.css";

const url="http://localhost:8080/items"



class AddItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      product: {},
      isFullFilled: false
    };

  }

  handleSubmit(values) {
    const option = {
      method: 'POST',
      body: JSON.stringify(values),
      headers: {
        'content-type': 'application/json'
      }
    }
    fetch(url,option)
      .then(response => {
        if (!response.ok) {
          throw new Error("bad request");
        }
      })
      .catch(error => this.openNotification());
  }

  openNotification = () => {
    notification.open({
      message: '添加订单失败',
      description:
        '商品名称已存在，请输入新的商品名称',
    });
  }

  handleValidate() {

  }

  render() {
    return (
      <div className="add-items">
        <h1>添加商品</h1>
        <Form layout="vertical" onFinish={this.handleSubmit.bind(this)} onChange={this.handleValidate.bind(this)}>
          <Form.Item
            label="名称"
            name="name"
            rules={[
              {
                required: true,
                message: '名称不能为空'
              }
            ]}>
            <Input placeholder="名称"/>
          </Form.Item>
          <Form.Item
            label="价格"
            name="price"
            rules={[
              {
                required: true,
                message: '价格不能为空'
              }
            ]}>
            <Input placeholder="价格" type="number"/>
          </Form.Item>
          <Form.Item
            label="单位"
            name="itemUnit"
            rules={[
              {
                required: true,
                message: '单位不能为空'
              }
            ]}>
            <Input placeholder="单位"/>
          </Form.Item>
          <Form.Item label="图片"
                     name="pics"
                     rules={[
                       {
                         required: true,
                         message: '图片不能为空'
                       }
                     ]}>
            <Input placeholder="图片"/>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType={"submit"} disabled={this.state.isFullFilled}>提交</Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

AddItem.propTypes = {};

export default AddItem;