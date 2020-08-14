import React from 'react';
import add from '../../assets/add.svg';


class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="single-item">
                <img src={this.props.pics} alt="item picture" />
                <p>{this.props.name}</p>
                <p>单价：{this.props.price}元/瓶</p>
                <img src={add} alt="add item" />
            </div>
        )
    }
}

export default Item;