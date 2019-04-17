import React from 'react';
import PropTypes from 'prop-types';
import styles from './TotalPrice.module.css';

const TotalPrice = ({ options, selectedOptions, product }) => {
  if (!product) {
    return null;
  }

  let price = product.sale || product.price;

  const premiumOptionsIds = new Set(
    Object.values(options)
      .filter(option => option.premium)
      .map(option => option.id)
  );

  const selectedOptionsIds = new Set(Object.keys(selectedOptions));

  const selectedPremiumOptionsIds = new Set(
    [...premiumOptionsIds].filter(x => selectedOptionsIds.has(x))
  );

  const getOptionName = id => {
    const optionName = options[id].name;
    console.log('optionName: ' + optionName);
    switch (optionName) {
      case 'Include Hood Ornament?':
        return <div>Hood Ornament</div>;
      case 'Include Trunk Monkey?':
        return <div>Trunk Monkey</div>;
      default:
        return <div>{optionName}</div>;
    }
  };

  return (
    <div className={styles.cost}>
      {[...selectedPremiumOptionsIds].map(id => (
        <div key={id} className={styles.row}>
          <div className={styles.optionName}>{getOptionName(id)}</div>
          <div className={styles.optionName}> + 50</div>
        </div>
      ))}
      <hr />
      <div className={styles.total}>
        <span>Total: $</span>{' '}
        {price + [...selectedPremiumOptionsIds].length * 50}
      </div>
    </div>
  );
};

TotalPrice.propTypes = {
  options: PropTypes.object.isRequired,
  selectedOptions: PropTypes.object.isRequired,
  product: PropTypes.object
};

export default TotalPrice;
