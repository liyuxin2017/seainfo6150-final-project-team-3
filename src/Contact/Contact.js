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
        className={styles.textInput}
      />
      <label htmlFor="firstName">First name</label>
      <input
        type='text'
        id='firstName'
        className={styles.textInput}
      />
      <label htmlFor="phoneNumber">Phone number</label>
      <input
        type='text'
        id='phoneNumber'
        className={styles.textInput}
      />
      <label htmlFor="email">Email</label>
      <input
        type='text'
        id='email'
        className={styles.textInput}
      />
    <input type='submit' value='SUBMIT' />
    </fieldset>
    <fieldset className={styles.rightField}>
      <legend>Message</legend>
      <label htmlFor="message"></label>
      <textarea
        id='message'
        className={styles.message}
      />
    </fieldset>
  </form>
  </div>
);

export default Contact;
