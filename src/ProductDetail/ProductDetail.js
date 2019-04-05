import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import styles from './ProductDetail.module.css';

class ProductDetail extends PureComponent {
  componentDidMount() {
    this.props.viewProduct(this.props.product.id);
  }

  render() {
    const { categories, product, selectProductId } = this.props;

    const category = categories[product.categoryId];
    return (
      <div>
        <span>{product.title}</span>
        <div className={styles.productInfo}>
          <img src={category.img.lg} className={styles.image} />

          <div className={styles.productTextInfo}>
            {/* start order button */}
            <span> ID: {product.id}</span>
            <br />
            <span> Name: {product.title}</span>
            <br />
            <span> Year: {product.year}</span>
            <br />
            <span> Available: {product.available} </span>
            <br />
            <span> Sale Price: {product.price}</span>
            <br />
            <span> Price: {product.price}</span>
            <br />
            <span> Description: {product.description}</span>
            <br />
            <div className={styles.button}>
              <Link
                to='/order/1'
                onClick={selectProductId.bind(null, product.id)}
              >
                Order
              </Link>
              {/* end order button */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductDetail;
