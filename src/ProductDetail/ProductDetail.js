import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

class ProductDetail extends PureComponent {
  componentDidMount() {
    this.props.viewProduct(this.props.product.id);
  }

  render() {
    const {
      categories,
      product,
      selectProductId
    } = this.props;

    const category = categories[product.categoryId];
    return (
      <div>
        <span>{product.title}</span>
        <img src={category.img.lg} />

        {/* start order button */}
        <Link to="/order/1" onClick={selectProductId.bind(null, product.id)}>Order</Link>
        {/* end order button */}

      </div>
    );
  }

}

export default ProductDetail;
