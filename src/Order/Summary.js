import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import TotalPrice from './TotalPrice';
import styles from './Summary.module.css';

class Summary extends Component {
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

  printPage() {
    window.print();
  }
  render() {
    const {
      options,
      products,
      selectedOptions,
      selectedProductId,
      userInfo,
      categories
    } = this.props;

    const selectedProduct = this.props.products[selectedProductId];
    const category = categories[selectedProduct.categoryId];

    if (!selectedProductId) {
      return <div>Please choose a product first!</div>;
    }

    const displayOption = (option, originalOption, selectedValue) => {
      switch (typeof selectedValue) {
        case 'boolean':
          return <li key={option}>{originalOption.name}: true</li>;
        default:
          return (
            <li key={option}>
              {originalOption.name}: {selectedValue}
            </li>
          );
      }
    };

    return this.state.submittedSuccessfully ? (
      <Redirect to='/order/thank-you' />
    ) : (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className={styles.printPanel}>
            <button onClick={this.printPage} className={styles.button}>
              print
            </button>
          </div>
          <div className={styles.row}>
            <div className={styles.userInformation}>
              {/* This will iterate through all the user info so you can see what the user entered. */}
              <ul className={styles.display}>
                {Object.keys(userInfo).map(info => (
                  <li key={info}>
                    {info}: {userInfo[info]}
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.productInformation}>
              <img className={styles.image} src={category.img.sm} alt='image' />
              {/* This will iterate through all the selected options so you can see what the user chose. */}
              <ul className={styles.display}>
                {Object.keys(selectedOptions).map(option => {
                  const originalOption = options[option];
                  const selectedValue = selectedOptions[option];
                  return displayOption(option, originalOption, selectedValue);
                })}
              </ul>
            </div>
          </div>

          <TotalPrice
            options={options}
            product={products[selectedProductId]}
            selectedOptions={selectedOptions}
          />

          <fieldset className={styles.submit}>
            <input
              type='submit'
              value='Submit order'
              className={styles.submitInput}
            />
          </fieldset>
        </form>
      </div>
    );
  }
}

Summary.propTypes = {
  options: PropTypes.object.isRequired,
  products: PropTypes.object.isRequired,
  selectedOptions: PropTypes.object.isRequired,
  selectedProductId: PropTypes.string
};

export default Summary;
