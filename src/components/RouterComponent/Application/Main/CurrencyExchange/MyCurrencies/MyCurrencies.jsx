/* eslint-disable max-len */
import style from './MyCurrencies.module.scss';
import PropTypes from 'prop-types';

export const MyCurrencies = ({ userCurrencies }) => (
  <section className={style.myCurrencies}>
    <h3 className={style.myCurrenciesTitle}>Мои валюты</h3>
    <ul className={style.myCurrenciesList}>
      <li className={style.myCurrenciesItem}>
        {Object.keys(userCurrencies).map((currency, index) => (
          <p key={index} className={style.myCurrenciesName}>
            {userCurrencies[currency].code}
          </p>
        ))}
      </li>
      <li className={style.myCurrenciesItem}>
        {Object.keys(userCurrencies).map((currency, index) => (
          <p key={index} className={style.myCurrenciesQuantity}>
            {userCurrencies[currency].amount.toFixed(2)}
          </p>
        ))}
      </li>
    </ul>
  </section>
);

MyCurrencies.propTypes = {
  userCurrencies: PropTypes.object,
};
