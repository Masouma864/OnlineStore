import React from 'react';
import './App.css';
import ProductList from './Products/ProductList';
import ProductForm from './Products/ProductForm';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <ProductList />
      <ProductForm />
    </div>
    </Provider>
  );
}

export default App;
