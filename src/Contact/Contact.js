import React from 'react';

import styles from './Contact.module.css';

const Contact = () => (
  <div className={styles.container}>
  <form className={styles.form}>
    <fieldset className={styles.leftField}>
      <legend>Info</legend>
      <label htmlFor="lastName">Last name</label>
      <input
        type='text'
        id='lastName'
      />
      <label htmlFor="firstName">First name</label>
      <input
        type='text'
        id='firstName'
      />
      <label htmlFor="phoneNumber">Phone number</label>
      <input
        type='text'
        id='phoneNumber'
      />
      <label htmlFor="email">Email</label>
      <input
        type='text'
        id='email'
      />
    <input type='submit' value='SUBMIT' />
    </fieldset>
    <fieldset className={styles.rightField}>
      <legend>Message</legend>
      <label htmlFor="message"></label>
      <textarea
        id='message'
        className={styles.Message}
      />
    </fieldset>
  </form>
  </div>
);

export default Contact;
