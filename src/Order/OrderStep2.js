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
      isZipCodeValid: true,
      isbillingAddressSameAsShipment: false
    };
  }

  handleSubmit() {
    this.setState({
      submittedSuccessfully: true
    });
  }

  componentDidMount() {}

  setFirstNameValid = (e, setUserInfo) => {
    const value = e.target.value;
    const regName = /^[a-zA-Z]{2,20}$/g;
    if (regName.test(value)) {
      this.setState({
        isFirstNameValid: true
      });
    } else {
      this.setState({
        isFirstNameValid: false
      });
    }
    setUserInfo('First Name', e);
  };
  setLastNameValid = (e, setUserInfo) => {
    const value = e.target.value;
    const regName = /^[a-zA-Z]{2,20}$/g;
    if (regName.test(value)) {
      this.setState({
        isLastNameValid: true
      });
    } else {
      this.setState({
        isLastNameValid: false
      });
    }
    setUserInfo('Last Name', e);
  };
  setPhoneNumberValid = (e, setUserInfo) => {
    const value = e.target.value;
    const regName = /^\d{10}$/g;
    if (regName.test(value)) {
      this.setState({
        isPhoneNumberValid: true
      });
    } else {
      this.setState({
        isPhoneNumberValid: false
      });
    }
    setUserInfo('Phone Number', e);
  };
  setCellNumberValid = (e, setUserInfo) => {
    const value = e.target.value;
    const regName = /^\d{10}$/g;
    if (regName.test(value)) {
      this.setState({
        isCellNumberValid: true
      });
    } else {
      this.setState({
        isCellNumberValid: false
      });
    }
    setUserInfo('Cell Number', e);
  };

  setBillingAddressSameAsShipment = () => {
    this.setState({
      isbillingAddressSameAsShipment: true
    });
  };

  setBillingAddressDifferentFromShipment = () => {
    this.setState({
      isbillingAddressSameAsShipment: false
    });
  };

  setBillingAddress(e, setUserInfo) {
    setUserInfo('Billing Address', e);
    setUserInfo('Shipment Address', e);
  }
  setBillingCity(e, setUserInfo) {
    setUserInfo('Billing City', e);
    setUserInfo('Shipment City', e);
  }
  setBillingState(e, setUserInfo) {
    setUserInfo('Billing State', e);
    setUserInfo('Shipment State', e);
  }
  setBillingZipCode(e, setUserInfo) {
    const value = e.target.value;
    const regZip = /^\d{5}$/g;
    if (regZip.test(value)) {
      this.setState({
        isZipCodeValid: true
      });
    } else {
      this.setState({
        isZipCodeValid: false
      });
    }
    setUserInfo('Billing Zip Code', e);
    setUserInfo('Shipment Zip Code', e);
  }

  render() {
    const { options, selectedProductId, userInfo, setUserInfo } = this.props;

    return this.state.submittedSuccessfully ? (
      <Redirect to='/order/summary' />
    ) : (
      <form
        onSubmit={this.handleSubmit.bind(this)}
        className={styles.container}
      >
        <fieldset className={styles.fieldset}>
          <legend>Personal Information</legend>

          <div className={styles.row}>
            <div className={styles.labelInput}>
              <label htmlFor='userFirstName'>*First Name</label>
              <div className={styles.fieldWrapper}>
                <input
                  type='text'
                  name='userFirstName'
                  id='userFirstName'
                  onChange={e => {
                    this.setFirstNameValid(e, setUserInfo);
                  }}
                  required
                />
                {this.state.isFirstNameValid ? (
                  ''
                ) : (
                  <p className={styles.error}>
                    First Name should be 2-20 letters
                  </p>
                )}
              </div>
            </div>

            <div className={styles.labelInput}>
              <label htmlFor='userLastName'>*Last Name</label>
              <div className={styles.fieldWrapper}>
                <input
                  type='text'
                  name='userLastName'
                  id='userLastName'
                  onChange={e => {
                    this.setLastNameValid(e, setUserInfo);
                  }}
                  required
                />
                {this.state.isLastNameValid ? (
                  ''
                ) : (
                  <p className={styles.error}>
                    Last Name should be 2-20 letters
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.labelInput}>
              <label htmlFor='dateOfBirth'>*Date of birth:</label>
              <div className={styles.fieldWrapper}>
                <input
                  type='date'
                  id='dateOfBirth'
                  onChange={setUserInfo.bind(null, 'Date')}
                  required
                />
              </div>
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.labelInput}>
              <label htmlFor='phoneNumber'>*Phone Number</label>
              <div className={styles.fieldWrapper}>
                <input
                  type='text'
                  name='phoneNumber'
                  id='phoneNumber'
                  onChange={e => {
                    this.setPhoneNumberValid(e, setUserInfo);
                  }}
                  required
                />
                {this.state.isPhoneNumberValid ? (
                  ''
                ) : (
                  <p className={styles.error}>
                    Phone Number should be a 10-digit number
                  </p>
                )}
              </div>
            </div>

            <div className={styles.labelInput}>
              <label htmlFor='cellNumber'>Cell Number</label>
              <div className={styles.fieldWrapper}>
                <input
                  type='text'
                  name='cellNumber'
                  id='cellNumber'
                  onChange={e => {
                    this.setCellNumberValid(e, setUserInfo);
                  }}
                />
                {this.state.isCellNumberValid ? (
                  ''
                ) : (
                  <p className={styles.error}>
                    Cell Number should be a 10-digit number
                  </p>
                )}
              </div>
            </div>
          </div>
        </fieldset>
        <fieldset className='{styles.textFields} {styles.fieldset}'>
          <legend>Address Information</legend>
          <div className={styles.row}>
            <div className={styles.labelInput}>
              <label htmlFor='address'>*Billing Address</label>
              <div className={styles.fieldWrapper}>
                <input
                  type='text'
                  name='address'
                  id='address'
                  onChange={e => {
                    this.setBillingAddress(e, setUserInfo);
                  }}
                  required
                />
              </div>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.labelInput}>
              <label htmlFor='city'>*City</label>
              <div className={styles.fieldWrapper}>
                <input
                  type='text'
                  name='city'
                  id='city'
                  onChange={e => {
                    this.setBillingCity(e, setUserInfo);
                  }}
                  required
                />
              </div>
            </div>
            <div className={styles.labelInput}>
              <label htmlFor='state'>*State</label>
              <div className={styles.fieldWrapper}>
                <input
                  type='text'
                  name='state'
                  id='state'
                  onChange={e => {
                    this.setBillingState(e, setUserInfo);
                  }}
                  required
                />
              </div>
            </div>
            <div className={styles.labelInput}>
              <label htmlFor='zipCode'>*Zip Code</label>
              <div className={styles.fieldWrapper}>
                <input
                  type='text'
                  name='zipCode'
                  id='zipCode'
                  onChange={e => {
                    this.setBillingZipCode(e, setUserInfo);
                  }}
                  required
                />
                {this.state.isZipCodeValid ? (
                  ''
                ) : (
                  <p className={styles.error}>Zip Code should be 5 letters</p>
                )}
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

            <label
              className={styles.shipmentAddress}
              htmlFor='shipmentAddress-0'
            >
              Same as Billing address
            </label>
            <input
              type='radio'
              name='shipmentAddress'
              id='shipmentAddress-1'
              onClick={this.setBillingAddressDifferentFromShipment}
              required
            />
            <label
              className={styles.shipmentAddress}
              htmlFor='shipmentAddress-1'
            >
              Enter new address
            </label>
          </div>

          {this.state.isbillingAddressSameAsShipment ? (
            <div>
              <div className={styles.row}>
                <div className={styles.labelInput}>
                  <label htmlFor='address'>*Shipment Address</label>
                  <div className={styles.fieldWrapper}>
                    <input
                      type='text'
                      name='address'
                      id='address'
                      value={
                        userInfo && userInfo['Billing Address']
                          ? userInfo['Billing Address']
                          : ''
                      }
                      onChange={setUserInfo.bind(null, 'Shipment Address')}
                    />
                  </div>
                </div>
              </div>
              <div className={styles.row}>
                <div className={styles.labelInput}>
                  <label htmlFor='city'>*City</label>
                  <div className={styles.fieldWrapper}>
                    <input
                      type='text'
                      name='city'
                      id='city'
                      value={
                        userInfo && userInfo['Billing City']
                          ? userInfo['Billing City']
                          : ''
                      }
                      onChange={setUserInfo.bind(null, 'Shipment City')}
                    />
                  </div>
                </div>
                <div className={styles.labelInput}>
                  <label htmlFor='state'>*State</label>
                  <div className={styles.fieldWrapper}>
                    <input
                      type='text'
                      name='state'
                      id='state'
                      value={
                        userInfo && userInfo['Billing State']
                          ? userInfo['Billing State']
                          : ''
                      }
                      onChange={setUserInfo.bind(null, 'Shipment State')}
                    />
                  </div>
                </div>
                <div className={styles.labelInput}>
                  <label htmlFor='zipCode'>*Zip Code</label>
                  <div className={styles.fieldWrapper}>
                    <input
                      type='text'
                      name='zipCode'
                      id='zipCode'
                      value={
                        userInfo && userInfo['Billing Zip Code']
                          ? userInfo['Billing Zip Code']
                          : ''
                      }
                      onChange={setUserInfo.bind(null, 'Shipment Zip Code')}
                    />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <div className={styles.row}>
                <div className={styles.labelInput}>
                  <label htmlFor='address'>*Shipment Address</label>
                  <div className={styles.fieldWrapper}>
                    <input
                      key='1'
                      type='text'
                      name='address'
                      id='address'
                      onChange={setUserInfo.bind(null, 'Shipment Address')}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className={styles.row}>
                <div className={styles.labelInput}>
                  <label htmlFor='city'>*City</label>
                  <div className={styles.fieldWrapper}>
                    <input
                      key='2'
                      type='text'
                      name='city'
                      id='city'
                      onChange={setUserInfo.bind(null, 'Shipment City')}
                      required
                    />
                  </div>
                </div>
                <div className={styles.labelInput}>
                  <label htmlFor='state'>*State</label>
                  <div className={styles.fieldWrapper}>
                    <input
                      key='3'
                      type='text'
                      name='state'
                      id='state'
                      onChange={setUserInfo.bind(null, 'Shipment State')}
                      required
                    />
                  </div>
                </div>
                <div className={styles.labelInput}>
                  <label htmlFor='zipCode'>*Zip Code</label>
                  <div className={styles.fieldWrapper}>
                    <input
                      key='4'
                      type='text'
                      name='zipCode'
                      id='zipCode'
                      onChange={setUserInfo.bind(null, 'Shipment Zip Code')}
                      required
                    />
                    {this.state.isZipCodeValid ? (
                      ''
                    ) : (
                      <p className={styles.error}>
                        Zip Code should be 5 letters
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </fieldset>

        <fieldset className='{styles.submit} {styles.fieldset}'>
          <input
            className={styles.submit}
            type='submit'
            value='Go to summary'
          />
        </fieldset>
      </form>
    );
  }
}

OrderStep2.propTypes = {
  options: PropTypes.object.isRequired,
  selectedProductId: PropTypes.string,
  setUserInfo: PropTypes.func
};

export default OrderStep2;
