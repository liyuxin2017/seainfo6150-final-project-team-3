import React from 'react';
import PropTypes from 'prop-types';

import Products from '../Products/Products';
import styles from './AllProducts.module.css';

const AllProducts = ({ categories, products }) => (
  <div className={styles.container}>
    <Products categories={categories} products={products} />
  </div>
);

AllProducts.propTypes = {
  products: PropTypes.array.isRequired
};

export default AllProducts;
