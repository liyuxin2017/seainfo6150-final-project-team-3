import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import styles from './OrderStep2.module.css';

class OrderStep2 extends Component {
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

  componentDidMount() {}

  toggleShipmentAddress = () => {
    this.addressText.disabled = !this.addressText.disabled;
    this.cityText.disabled = !this.cityText.disabled;
    this.stateText.disabled = !this.stateText.disabled;
    this.zipText.disabled = !this.zipText.disabled;
  };

  render() {
    const { options, selectedProductId, setUserInfo } = this.props;

    return this.state.submittedSuccessfully ? (
      <Redirect to='/order/summary' />
    ) : (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <fieldset className={styles.textFields}>
          <legend>Personal Information</legend>
          Last Name:{' '}
          <input
            type='text'
            name='userLastName'
            onChange={setUserInfo.bind(null, 'userLastName')}
          />
          First Name:{' '}
          <input
            type='text'
            name='userFirstName'
            onChange={setUserInfo.bind(null, 'userFirstName')}
          />
          <br />
          Date of birth:{' '}
          <input type='date' onChange={setUserInfo.bind(null, 'date')} />
          <br />
          Phone Number:{' '}
          <input
            type='text'
            name='phoneNumber'
            onChange={setUserInfo.bind(null, 'phoneNumber')}
          />
          <br />
          Cell Number:{' '}
          <input
            type='text'
            name='cellNumber'
            onChange={setUserInfo.bind(null, 'cellNumber')}
          />
        </fieldset>
        <fieldset className={styles.textFields}>
          <legend>Address Information</legend>
          Billing Address:{' '}
          <input
            type='text'
            name='address'
            onChange={setUserInfo.bind(null, 'address')}
          />
          <br />
          City:{' '}
          <input
            type='text'
            name='city'
            onChange={setUserInfo.bind(null, 'city')}
          />
          State:{' '}
          <input
            type='text'
            name='state'
            onChange={setUserInfo.bind(null, 'state')}
          />
          Zip code:{' '}
          <input
            type='text'
            name='zipCode'
            onChange={setUserInfo.bind(null, 'zipCode')}
          />
          <br />
          Shipment address:
          <input
            type='radio'
            name='shipmentAddress'
            onClick={this.toggleShipmentAddress}
          />
          Same as Billing address
          <input
            type='radio'
            name='shipmentAddress'
            onClick={this.toggleShipmentAddress}
          />
          Enter new address
          <br />
          Address:{' '}
          <input
            type='text'
            name='address'
            className={styles.shipment}
            ref={input => {
              this.addressText = input;
            }}
            onChange={setUserInfo.bind(null, 'address')}
          />
          <br />
          City:{' '}
          <input
            type='text'
            name='city'
            className={styles.shipment}
            ref={input => {
              this.cityText = input;
            }}
            onChange={setUserInfo.bind(null, 'city')}
          />
          State:{' '}
          <input
            type='text'
            name='state'
            className={styles.shipment}
            ref={input => {
              this.stateText = input;
            }}
            onChange={setUserInfo.bind(null, 'state')}
          />
          Zip code:{' '}
          <input
            type='text'
            name='zipCode'
            className={styles.shipment}
            ref={input => {
              this.zipText = input;
            }}
            onChange={setUserInfo.bind(null, 'zipCode')}
          />
        </fieldset>

        <fieldset className={styles.submit}>
          <input type='submit' value='Go to summary' />
        </fieldset>
      </form>
    );
  }
}

OrderStep2.propTypes = {
  options: PropTypes.object.isRequired,
  selectedProductId: PropTypes.string,
  setUserInfo: PropTypes.object
};

export default OrderStep2;
