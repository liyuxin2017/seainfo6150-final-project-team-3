import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Product.module.css';

const Products = ({ categories, products }) => {
  return products.map(product => {
    const category = categories[product.categoryId];
    function Availability(props){
      const available=props.available;
      if (available){
        return (
          <div>

          <img className={styles.image} src="https://cdn2.iconfinder.com/data/icons/weby-flat-vol-1/512/1_Approved-check-checkbox-confirm-green-success-tick-512.png" alt="home" />

          

          Available
          </div>
          )
      }
        return (
        <div>

        <img className={styles.image} src="https://previews.123rf.com/images/roxanabalint/roxanabalint1701/roxanabalint170100190/69079066-out-of-stock-red-leather-label-or-price-tag-on-white-background-vector-illustration.jpg" alt="home" />

       

        Out of Stock
        </div>
        )
    }

    function Price(props){
      const pro=product.sale;
      const available=product.available
      if (pro && available){
        return (
          <div>

          Was ${product.price} Now just ${product.sale}
          </div>
          )
      }
        return (
        <div>
        ${product.price}
        </div>
        )

    }
    function Offer(props){
      const pro=product.sale;
      const available=product.available
      if (pro && available){
        return "              ON OFFER!!"
      }
      return null
    }
    return (
      <div key={product.id}>


        <div>
         <Link to={`/products/${product.categoryId}/${product.id}`}>
          {<img src={category.img.sm} alt='product'/>}
         </Link>
        </div>
       <div className={styles.detail}>
       <div className={styles.animation}>
       <Link to={`/products/${product.categoryId}/${product.id}`}>
        {product.title}
        </Link>
        <Offer  pro={product.sale} />
        </div>
        <Availability available={product.available} />
        <Price pro={product.sale} />
       </div>

      </div>

    );
  });
};

Products.propTypes = {
  products: PropTypes.array.isRequired
};

export default Products;
