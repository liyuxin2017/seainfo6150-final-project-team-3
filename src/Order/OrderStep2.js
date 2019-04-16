import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import styles from './OrderStep2.module.css';

class OrderStep2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      submittedSuccessfully: false,
      isFirstNameValid: true,
      isLastNameValid: true,
      isPhoneNumberValid: true,
      isCellNumberValid: true,
      isbillingAddressSameAsShipment: false,
      billingAddress: ''
    };
  }

  handleSubmit() {
    this.setState({
      submittedSuccessfully: true
    });
  }

  componentDidMount() {
    let labelsArray = document.querySelectorAll('label');
    labelsArray.forEach(function(elem) {
      elem.addEventListener('click', function() {
        elem.setAttribute('style', 'margin-top:0');
      });
    });
  }

  setFirstNameValid = () => {
    if (this.state.isFirstNameValid) {
      this.state.isFirstNameValid = true;
    } else this.state.isFirstNameValid = false;
  };
  setBillingAddressSameAsShipment = () => {
    // this.state.isbillingAddressSameAsShipment = !this.state
    //   .isbillingAddressSameAsShipment;
    this.setState({
      isbillingAddressSameAsShipment: !this.state.isbillingAddressSameAsShipment
    });
  };

  render() {
    const { options, selectedProductId, setUserInfo } = this.props;

    return this.state.submittedSuccessfully ? (
      <Redirect to='/order/summary' />
    ) : (
      <form
        onSubmit={this.handleSubmit.bind(this)}
        className={styles.container}
      >
        <fieldset>
          <legend>Personal Information</legend>

          <div className={styles.row}>
            <div className={styles.labelInput}>
              <label for='userFirstName'>*First Name</label>
              <div className={styles.fieldWrapper}>
                <input
                  type='text'
                  name='userFirstName'
                  id='userFirstName'
                  onChange={this.setFirstNameValid()}
                  onChange={setUserInfo.bind(null, 'userFirstName')}
                  required
                />
                {this.state.isFirstNameValid ? (
                  ''
                ) : (
                  <p class={styles.error}>First Name should be 2-20 letters</p>
                )}
              </div>
            </div>

            <div className={styles.labelInput}>
              <label for='userLastName'>*Last Name</label>
              <div className={styles.fieldWrapper}>
                <input
                  type='text'
                  name='userLastName'
                  id='userLastName'
                  onChange={setUserInfo.bind(null, 'userLastName')}
                  required
                />
                {this.state.isLastNameValid ? (
                  ''
                ) : (
                  <p class={styles.error}>Last Name should be 2-20 letters</p>
                )}
              </div>
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.labelInput}>
              <label for='dateOfBirth'>*Date of birth:</label>
              <div className={styles.fieldWrapper}>
                <input
                  type='date'
                  id='dateOfBirth'
                  onChange={setUserInfo.bind(null, 'date')}
                  required
                />
              </div>
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.labelInput}>
              <label for='phoneNumber'>*Phone Number</label>
              <div className={styles.fieldWrapper}>
                <input
                  type='text'
                  name='phoneNumber'
                  id='phoneNumber'
                  onChange={setUserInfo.bind(null, 'phoneNumber')}
                  required
                />
                {this.state.isPhoneNumberValid ? (
                  ''
                ) : (
                  <p class={styles.error}>
                    Phone Number should be a 10-digit number
                  </p>
                )}
              </div>
            </div>

            <div className={styles.labelInput}>
              <label for='cellNumber'>Cell Number</label>
              <div className={styles.fieldWrapper}>
                <input
                  type='text'
                  name='cellNumber'
                  id='cellNumber'
                  onChange={setUserInfo.bind(null, 'cellNumber')}
                />
                {this.state.isCellNumberValid ? (
                  ''
                ) : (
                  <p class={styles.error}>
                    Cell Number should be a 10-digit number
                  </p>
                )}
              </div>
            </div>
          </div>
        </fieldset>
        <fieldset className={styles.textFields}>
          <legend>Address Information</legend>
          <div className={styles.row}>
            <div className={styles.labelInput}>
              <label for='address'>*Billing Address</label>
              <div className={styles.fieldWrapper}>
                <input
                  type='text'
                  name='address'
                  id='address'
                  onChange={setUserInfo.bind(null, 'billingAddress')}
                  onChange={e => {
                    this.setState({ billingAddress: e.target.value });
                    console.log('billingAddress' + this.state.billingAddress);
                  }}
                  required
                />
              </div>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.labelInput}>
              <label for='city'>*City</label>
              <div className={styles.fieldWrapper}>
                <input
                  type='text'
                  name='city'
                  id='city'
                  onChange={setUserInfo.bind(null, 'billingCity')}
                  required
                />
              </div>
            </div>
            <div className={styles.labelInput}>
              <label for='state'>*State</label>
              <div className={styles.fieldWrapper}>
                <input
                  type='text'
                  name='state'
                  id='state'
                  onChange={setUserInfo.bind(null, 'billingState')}
                  required
                />
              </div>
            </div>
            <div className={styles.labelInput}>
              <label for='zipCode'>*Zip Code</label>
              <div className={styles.fieldWrapper}>
                <input
                  type='text'
                  name='zipCode'
                  id='zipCode'
                  onChange={setUserInfo.bind(null, 'billingZipCode')}
                  required
                />
              </div>
            </div>
          </div>
          <div className={styles.row}>
            <p>*Shipment address</p>
            <input
              type='radio'
              name='shipmentAddress'
              id='shipmentAddress-0'
              onClick={this.setBillingAddressSameAsShipment}
              required
            />

            <label className={styles.shipmentAddress} for='shipmentAddress-0'>
              Same as Billing address
            </label>
            <input
              type='radio'
              name='shipmentAddress'
              id='shipmentAddress-1'
              onClick={this.setBillingAddressSameAsShipment}
              required
            />
            <label className={styles.shipmentAddress} for='shipmentAddress-1'>
              Enter new address
            </label>
          </div>

          {this.state.isbillingAddressSameAsShipment ? (
            ''
          ) : (
            <div>
              <div className={styles.row}>
                <div className={styles.labelInput}>
                  <label for='address'>*Shipment Address</label>
                  <div className={styles.fieldWrapper}>
                    <input
                      type='text'
                      name='address'
                      id='address'
                      onChange={setUserInfo.bind(null, 'shipmentAddress')}
                    />
                  </div>
                </div>
              </div>
              <div className={styles.row}>
                <div className={styles.labelInput}>
                  <label for='city'>*City</label>
                  <div className={styles.fieldWrapper}>
                    <input
                      type='text'
                      name='city'
                      id='city'
                      onChange={setUserInfo.bind(null, 'shipmentCity')}
                    />
                  </div>
                </div>
                <div className={styles.labelInput}>
                  <label for='state'>*State</label>
                  <div className={styles.fieldWrapper}>
                    <input
                      type='text'
                      name='state'
                      id='state'
                      onChange={setUserInfo.bind(null, 'shipmentState')}
                    />
                  </div>
                </div>
                <div className={styles.labelInput}>
                  <label for='zipCode'>*Zip Code</label>
                  <div className={styles.fieldWrapper}>
                    <input
                      type='text'
                      name='zipCode'
                      id='zipCode'
                      onChange={setUserInfo.bind(null, 'shipmentZipCode')}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
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
