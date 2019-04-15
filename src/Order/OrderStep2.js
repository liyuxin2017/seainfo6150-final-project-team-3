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

  enableShipmentAddress = () => {
    this.addressText.disabled = false;
    this.cityText.disabled = false;
    this.stateText.disabled = false;
    this.zipText.disabled = false;
  };
  disableShipmentAddress = () => {
    this.addressText.disabled = true;
    this.addressText.style = 'background-color:lightgrey;';
    this.cityText.disabled = true;
    this.cityText.style = 'background-color:lightgrey;';
    this.stateText.disabled = true;
    this.stateText.style = 'background-color:lightgrey;';
    this.zipText.disabled = true;
    this.zipText.style = 'background-color:lightgrey;';
  };

  render() {
    const { options, selectedProductId, setUserInfo } = this.props;

    return this.state.submittedSuccessfully ? (
      <Redirect to='/order/summary' />
    ) : (

      <form onSubmit={this.handleSubmit.bind(this)}>
      <div className={styles.container}>
        <fieldset className={styles.textFields}>
          <legend className={styles.header}>Personal Information</legend>
            <div className={styles.content}>
          Last Name{' '}
          <input
            type='text'
            name='userLastName'
            onChange={setUserInfo.bind(null, 'userLastName')}
            required
          />
          First Name{' '}
          <input
            type='text'
            name='userFirstName'
            onChange={setUserInfo.bind(null, 'userFirstName')}
            required
          />
          <br />
          Date of birth{' '}
          <input
            type='date'
            onChange={setUserInfo.bind(null, 'date')}
            required
          />
          <br />
          Phone Number{' '}
          <input
            type='text'
            name='phoneNumber'
            onChange={setUserInfo.bind(null, 'phoneNumber')}
            required
          />
          <br />
          Cell Number{' '}
          <input
            type='text'
            name='cellNumber'
            onChange={setUserInfo.bind(null, 'cellNumber')}
          />
          </div>
        </fieldset>
        <fieldset className={styles.textFields}>
          <legend className={styles.header}>Address Information</legend>
          <div className={styles.content}>
          Billing Address:{' '}
          <input
            type='text'
            name='address'
            onChange={setUserInfo.bind(null, 'address')}
            required
          />
          <br />
          City{' '}
          <input
            type='text'
            name='city'
            onChange={setUserInfo.bind(null, 'city')}
            required
          />
          State{' '}
          <input
            type='text'
            name='state'
            onChange={setUserInfo.bind(null, 'state')}
            required
          />
          Zip code{' '}
          <input
            type='text'
            name='zipCode'
            onChange={setUserInfo.bind(null, 'zipCode')}
            required
          />
          <br />
          Shipment address:
          <input
            type='radio'
            name='shipmentAddress'
            onClick={this.disableShipmentAddress}
            required
          />
          Same as Billing address
          <input
            type='radio'
            name='shipmentAddress'
            onClick={this.enableShipmentAddress}
            required
          />
          Enter new address
          <br />
          Address{' '}
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
          City{' '}
          <input
            type='text'
            name='city'
            className={styles.shipment}
            ref={input => {
              this.cityText = input;
            }}
            onChange={setUserInfo.bind(null, 'city')}
          />
          State{' '}
          <input
            type='text'
            name='state'
            className={styles.shipment}
            ref={input => {
              this.stateText = input;
            }}
            onChange={setUserInfo.bind(null, 'state')}
          />
          Zip code{' '}
          <input
            type='text'
            name='zipCode'
            className={styles.shipment}
            ref={input => {
              this.zipText = input;
            }}
            onChange={setUserInfo.bind(null, 'zipCode')}
          />
          </div>
        </fieldset>
        </div>

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
