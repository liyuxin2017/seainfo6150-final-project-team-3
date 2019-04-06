import React from 'react';
import PropTypes from 'prop-types';

import Products from '../Products/Products';

import styles from './CategoryProducts.module.css'

const CategoryProducts = ({ category, categories, products }) => (
  <div className={styles.container}>
    <Products categories={categories} products={products} />
  </div>
);

CategoryProducts.propTypes = {
  category: PropTypes.object.isRequired,
  products: PropTypes.array.isRequired
};

export default CategoryProducts;
