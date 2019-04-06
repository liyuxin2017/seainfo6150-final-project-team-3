import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Products = ({ categories, products }) => {
  return products.map(product => {
    const category = categories[product.categoryId];
    return (
      <div key={product.id}>
        <div>
          <img src={category.img.sm} />
        </div>
        <Link to={`/products/${product.categoryId}/${product.id}`}>
          {product.title}
        </Link>
      </div>
    );
  });
};

Products.propTypes = {
  products: PropTypes.array.isRequired
};

export default Products;
