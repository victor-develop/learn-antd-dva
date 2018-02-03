import React from 'react';
import { connect } from 'dva';
import ProductList from '../components/ProductList';

/**
 * 
 * "dispatch" is a word I heard of in React/Redux.
 * Okay, I got it.
 * Did you remember 'models/products.js'?
 * The namespace is 'product' and there is a 'delete' function in reducers
 * Go check that...
 * 
 * So dispatch will sned data to the model: products's reducers
 */
const Products = ({ dispatch, products }) => {
  function handleDelete(id) {
    dispatch({
      type: 'products/delete',
      payload: id
    });
  }
  return (
    <div style={{ padding: '0 20px' }}>
      <h2>List of My Products</h2>
      {/*
        Now this part looks pretty familiar with Vue components.
      */}
      <ProductList onDelete={handleDelete} products={products} />
    </div>
  )
};

/**
 * verbose syntax!
 * here links model and this Component,
 * the products model match the attribute at initialState.
 * When action comes, the reducers in the model will be in charge
 * of state update.
 * 
 * Deal.
 */
export default connect(({ products }) => ({
  products,
}))(Products);
