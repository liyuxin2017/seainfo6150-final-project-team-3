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
<div></div>
        {/* start order button */}
          <span> ID:{product.id}</span><br></br>
          <span> Name:{product.title}</span><br></br>
          <span> Year:{product.year}</span><br></br>
          <span> Available:{product.available} </span><br></br>
          <span> Sale Price:{product.price}</span><br></br>
          <span> Price:{product.price}</span><br></br>
          <span> Description:{product.description}</span><br></br>
          /test

        <Link to="/order/1" onClick={selectProductId.bind(null, product.id)}>Order</Link>
        {/* end order button */}

      </div>
    );
  }

}

export default ProductDetail;
