import React from 'react';
import Item from './Item';

const url = "http://localhost:8080"

class ItemList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            itemList:{},
        };
    }

    getItems() {
        fetch(url).then(result => {
            return result.json();
        }).catch(error => {
            console.log(error);
        }).then(json => {
            this.setState({itemList: json});
        })
    }

    setList(json) {
        const list = {};
        json.forEach(item => {
            const newItem = Object.assign({}, item);
            list.push(newItem);
        })
    }

    render() {
        this.getItems();
        return (
            <Item />
        )
    }
}

export default ItemList;