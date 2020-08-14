import React from 'react';
import logo from './logo.svg';
import './App.css';
import ItemList from './components/Items/ItemList';
import Header from './components/header/Header';

function App() {
  return (
    <div>
    <Header />
    <ItemList />
    </div>
  );
}

export default App;
