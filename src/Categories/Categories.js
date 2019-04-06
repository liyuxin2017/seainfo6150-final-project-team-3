import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Categories.module.css';

const Categories = ({ categories }) => (
  <div className={styles.container}>
    <ul className={styles.list}>
      {categories.map(category => {
        return (
          <li key={category.id}>
            <Link to={`/products/${category.id}`} className={styles.link}>
              {category.name}
            </Link>
          </li>
        );
      })}
    </ul>
  </div>
);

Categories.propTypes = {
  categories: PropTypes.array.isRequired
};

export default Categories;
