import React from 'react';
import Item from './Item';

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
    console.log(this.state.itemList);
    return (
      this.state.itemList.map((key, index) => {
        return (
          <Item name={this.state.itemList[index].name}
                pics={this.state.itemList[index].picUrl}
                price={this.state.itemList[index].price}
          />)

      })
    )
  }
}

export default ItemList;