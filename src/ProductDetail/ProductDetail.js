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
    function Price(props){
      const pro=product.sale;
      if (pro){
        return  (
          <div>Offer Price: ${product.sale}</div>
          )
        }
          return (
            <div> Price: ${product.price}</div>
          )
         }

    function OrderLink(props){
      const pro=product.available;
          if (pro){
               return  (
                   <div className={styles.button}>
                   <Link
                      to='/order/1'
                      onClick={selectProductId.bind(null, product.id)}
                      className={styles.link}>
                        Order
                  </Link>
                  </div>
           )
          }
            return (
                 <div className={styles.button}>
                      <Link to='/error' className={styles.link}>
                           Sorry not available
                      </Link>
                 </div>
                    )
          }

    return (
      <div>
        <div className={styles.head}>
          <span>{product.title}</span>
        </div>
        <div className={styles.productInfo}>

          <img src={category.img.lg} className={styles.image} alt="home" />

              <div className={styles.productTextInfo}>

                <span> Model: {product.title}</span>
                <br />
                <span> MakeYear: {product.year}</span>
                <br />
                <span><Price pro={product.sale} /></span>
                <span> Description: {product.description}</span>
                <br />
                <OrderLink pro={product.available} />
              </div>
        </div>
      </div>
    );
  }
}

export default ProductDetail;
