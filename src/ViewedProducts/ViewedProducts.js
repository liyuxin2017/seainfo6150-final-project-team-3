import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './ViewedProducts.module.css';

const ViewedProducts = ({ categories, products }) => {
  if (!products.length) {
    return null;
  }

  const viewedProductsPage = products.slice(0,5).map((product, index) => {
    const category = categories[product.categoryId];
    return (
      <div key={`${product.id}-${index}`}>
        <Link to={`/products/${category.id}/${product.id}`}>
          <img src={category.img.sm} className={styles.image}/>
        </Link>
      </div>
    );
  });

  return (
    <div className={styles.container}>
      {viewedProductsPage}
    </div>
  )
};

ViewedProducts.propTypes = {
  categories: PropTypes.object.isRequired,
  products: PropTypes.array.isRequired
};

export default ViewedProducts;
