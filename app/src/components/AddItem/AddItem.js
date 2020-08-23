import React from "react";
import { Button,Form } from "antd";
import {Input} from "antd";

const url="http://localhost:8080/items"

class AddItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      product: {}
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
      .then(response => response.json())
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div>
        <Form layout="vertical" onFinish={this.handleSubmit}>
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
            <Button type="primary" htmlType={"submit"}>Submit</Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

AddItem.propTypes = {};

export default AddItem;