import React from 'react';
import './App.css';
import ProductList from './Products/ProductList';
import ProductForm from './Products/ProductForm';


function App() {
  return (
    <div className="App">
      <ProductList />
      <ProductForm />
    </div>
  );
}

export default App;
