import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from "react-router-dom";
import PowerOptions from "./orderStep1/PowerOptions";
import InteriorOptions from "./orderStep1/InteriorOptions";
import ExteriorOptions from "./orderStep1/ExteriorOptions";
import PremiumFeatures from "./orderStep1/PremiumFeatures";
import styles from "./OrderStep1.module.css";

class OrderStep1 extends Component {
  constructor(props) {

    console.log("Check 1");
    console.log(props);
    super(props);

    this.state = {
      submittedSuccessfully: false
    }
  }

  handleSubmit() {
    this.setState({
      submittedSuccessfully: true
    });
  }

  render() {
    const {
      options,
      selectedProductId,
      setProductOption,
        categories
    } = this.props;
      console.log(this.props);
      console.log("Check 2 " + selectedProductId +" " + categories);
    let selectedProductCategoryId = null;
    const selectedProduct = this.props.products[selectedProductId];
    if (selectedProduct) {
        selectedProductCategoryId = selectedProduct.categoryId;
        console.log(this.props.options);
        const category = categories[selectedProductCategoryId];
        return (
            <div className={styles.container}>
                
                <div className={styles["top-panel"]}>
                    {
                        <PowerOptions className={styles["panel"]} selectedProduct={selectedProductCategoryId} options={this.props.options}/>
                    }
                    {<InteriorOptions selectedProduct={selectedProductCategoryId} options={this.props.options}/>}
                    {<ExteriorOptions selectedProduct={selectedProductCategoryId} options={this.props.options}/>}
                    {<PremiumFeatures selectedProduct={selectedProductCategoryId} options={this.props.options}/>}
                </div>
                <div className={styles["bottom-panel"]}>
                    <img className={styles.image} src={category.img.lg} />
                </div>
            </div>

        );
    }
    return this.state.submittedSuccessfully
      ? (<Redirect to="/order/2" />)
      : (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <fieldset>
          <input type="submit" value="Go to step 2" />
        </fieldset>
      </form>
      /*<div>
        <Link
            to='/order/2'
            onClick={selectProductCategoryId.bind(null, product.id)}
                
            >
          Order
        </Link>
       </div>*/
    )
  }
}

OrderStep1.propTypes = {
  options: PropTypes.object.isRequired,
  selectedProductId: PropTypes.string
};

export default OrderStep1;
