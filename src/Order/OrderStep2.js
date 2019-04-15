import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import styles from './OrderStep2.module.css';
import { userInfo } from 'os';

class OrderStep2 extends Component {
  e = React.createElement;
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

  componentDidMount() {
    console.log('componentDisMiount');
    let labelsArray = document.querySelectorAll('label');
    labelsArray.forEach(function(elem) {
      elem.addEventListener('click', function() {
        elem.setAttribute('style', 'margin-top:0');
      });
    });
  }

  validateFirstName = () => {};
  addShipmentAddress = () => {
    e('p', null, 'Please enter your first name');
  };
  enableShipmentAddress = () => {
    this.addressText.disabled = false;
    this.cityText.disabled = false;
    this.stateText.disabled = false;
    this.zipText.disabled = false;
  };
  disableShipmentAddress = () => {
    this.addressText.disabled = true;
    this.addressText.innerText = userInfo.address;
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
        <fieldset>
          <legend>Personal Information</legend>

          <div className={styles.row}>
            <div className={styles.classInput}>
              <label for='first_name'>*First Name</label>
              <div className={styles.fieldWrapper}>
                <input
                  type='text'
                  name='first_name'
                  id='first_name'
                  onChange={this.validateFirstName()}
                  onChange={setUserInfo.bind(null, 'userFirstName')}
                />
              </div>
            </div>
          </div>

          <div class='row'>
            <div class='col-xs-12 new-tel-con j-adr-tel-con'>
              <div class='cshe-adr-input j-adr-item she-fl check-false'>
                <label for='inputError' class='adr-title j-adr-title'>
                  *Phone Number
                </label>
                <div class='input-item'>
                  <input
                    type='text'
                    class='adr-input j-adr-input j-adr-tel'
                    autocomplete='shein'
                  />
                  <i class='iconfont icon-check' />
                </div>
                <p class='adr-error'>
                  Phone number should be a 10-digit number
                </p>
              </div>
            </div>
          </div>

          <div className={styles.test}>Above is test 1</div>
          <div className={styles.row}>
            <div className={styles.col}>
              <label for='userLastName'>
                *Last Name:
                <p className='error'>Last name should be 2-20 letters</p>
              </label>
              <input
                type='text'
                name='userLastName'
                onChange={setUserInfo.bind(null, 'userLastName')}
                required
              />
              <i class='iconfont icon-check' />
            </div>

            <div className={styles.col}>
              *First Name:{' '}
              <input
                type='text'
                name='userFirstName'
                onChange={setUserInfo.bind(null, 'userFirstName')}
                required
              />
            </div>
          </div>
          <div className={styles.row}>
            *Date of birth:{' '}
            <input
              type='date'
              onChange={setUserInfo.bind(null, 'date')}
              required
            />
          </div>
          <div className={styles.row}>
            *Phone Number:{' '}
            <input
              type='text'
              name='phoneNumber'
              onChange={setUserInfo.bind(null, 'phoneNumber')}
              required
            />
          </div>
          <div className={styles.row}>
            Cell Number:{' '}
            <input
              type='text'
              name='cellNumber'
              onChange={setUserInfo.bind(null, 'cellNumber')}
            />
          </div>
        </fieldset>
        <fieldset className={styles.textFields}>
          <legend>Address Information</legend>
          <div className={styles.row}>
            *Billing Address:{' '}
            <input
              type='text'
              name='address'
              onChange={setUserInfo.bind(null, 'address')}
              required
            />
          </div>
          <div className={styles.row}>
            <div className={styles.col}>
              *City:{' '}
              <input
                type='text'
                name='city'
                onChange={setUserInfo.bind(null, 'city')}
                required
              />
            </div>
            <div className={styles.col}>
              *State:{' '}
              <input
                type='text'
                name='state'
                onChange={setUserInfo.bind(null, 'state')}
                required
              />
            </div>
            <div className={styles.col}>
              *Zip code:{' '}
              <input
                type='text'
                name='zipCode'
                onChange={setUserInfo.bind(null, 'zipCode')}
                required
              />
            </div>
          </div>
          <div className={styles.row}>
            <label>*Shipment address:</label>
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
          </div>
          <div className={styles.row}>
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
          </div>
          <div className={styles.row}>
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
          </div>
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
