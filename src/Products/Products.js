import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Products = ({ categories, products }) => {
  return products.map(product => {
    const category = categories[product.categoryId];
    function Availability(props){
      const available=props.available;
      if (available){
        return "AVAILABLE"
      }
        return "SOLD OUT"
    }

    function Price(props){
      const pro=product.sale;
      if (pro){
        return (
          <div> 
          <h6>On offer ${product.sale} </h6>
          </div>
          )
      }
        return (
        <div> 
        <h6>${product.price} </h6>
        </div>
        )
      
    }
    return (
      <div key={product.id}>
        <div>
         <Link to={`/products/${product.categoryId}/${product.id}`}>
          {<img src={category.img.sm} />}
          </Link>
        </div>
       <div>
        {product.title}
        <br />
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
