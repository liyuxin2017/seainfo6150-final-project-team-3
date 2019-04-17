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
    console.log('Summary', this.props);


    if (!selectedProductId) {
      return <div>Please choose a product first!</div>;
    }
    console.log(
      'selectedOptions: ' +
        selectedOptions +
        ' selectedProductId: ' +
        selectedProductId +
        ' userInfo: ' +
        userInfo
    );
      const selectedProduct = this.props.products[selectedProductId];
      let selectedProductCategoryId = selectedProduct.categoryId;
      const category = categories[selectedProductCategoryId];

      return this.state.submittedSuccessfully ? (
      <Redirect to='/order/thank-you' />
    ) : (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          {/* This will iterate through all the selected options so you can see what the user chose. */}

         <img className={styles.image} src={category.img.sm}
            alt='This is image'
          />
          <ul>
            {Object.keys(selectedOptions).map(option => {
              const originalOption = options[option];
              const selectedValue = selectedOptions[option];

              return (
                <li key={option}>
                  {originalOption.name}: {selectedValue===true ? "YES" : selectedValue}
                </li>
              );
            })}
          </ul>

          {/* This will iterate through all the user info so you can see what the user entered. */}
          <ul className={styles.display}>
            {Object.keys(userInfo).map(info => (
              <li key={info}>
                {info}: {userInfo[info]}
              </li>
            ))}
          </ul>

          <TotalPrice
            options={options}
            product={products[selectedProductId]}
            selectedOptions={selectedOptions}
          />

          <fieldset className={styles.submit}>
            <input type='submit' value='Submit order' className={styles.button}/>
          </fieldset>
        </form>
        <button onClick={this.printPage} className={styles.button}>print</button>
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
