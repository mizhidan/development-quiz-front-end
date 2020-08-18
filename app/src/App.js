import React from 'react';
import logo from './logo.svg';
import './App.css';
import ItemList from './components/Items/ItemList';
import Header from './components/header/Header';
import {Row} from "antd";



function App() {
  return (
    <div>
      <Header/>
      <div className="item-list">
        <Row>
          <ItemList/>
        </Row>
      </div>
    </div>
  );
}


export default App;
