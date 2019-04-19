import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import Selector from './orderStep1/Selector';
import styles from './OrderStep1.module.css';

class OrderStep1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      submittedSuccessfully: false
    };
  }

  handleSubmit() {
    this.setState({
      submittedSuccessfully: true
    });
  }

  render() {
    const { selectedProductId, categories } = this.props;
    let selectedProductCategoryId = null;
    const selectedProduct = this.props.products[selectedProductId];

    let opt;
    if (selectedProduct) {
      selectedProductCategoryId = selectedProduct.categoryId;
      const category = categories[selectedProductCategoryId];
      opt = (
        <div className={styles.container + ' ' + styles.responsive}>
          <div>
            {
              /* eslint-disable */
              <Selector
                setProductOption={this.props.setProductOption}
                selectedProduct={selectedProductCategoryId}
                selectedOptions={this.props.selectedOptions}
                options={this.props.options}
              />
            }
          </div>
          <div className={styles['bottom-panel']}>
            <img
              className={styles.image}
              alt='CarImage'
              src={category.img.lg}
            />
          </div>
        </div>
      );
    }
    return this.state.submittedSuccessfully ? (
      <Redirect to='/order/2' />
    ) : (
      <form onSubmit={this.handleSubmit.bind(this)} key={"OrderStep2 go"}>
        {opt}
        <fieldset className={styles.button}>
          <input className={styles.submit} type='submit' value='Go to Step 2' />
        </fieldset>
      </form>
    );
  }
}

OrderStep1.propTypes = {
  options: PropTypes.object.isRequired,
  selectedProductId: PropTypes.string,
  selectedOptions: PropTypes.object.isRequired,
  setProductOption: PropTypes.func.isRequired
};

export default OrderStep1;
