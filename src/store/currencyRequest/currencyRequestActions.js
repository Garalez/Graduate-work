/* eslint-disable max-len */

import { URL_API } from '../../utils/api';

export const CURRENCY_REQUEST = 'CURRENCY_REQUEST';
export const CURRENCY_REQUEST_SUCCESS = 'CURRENCY_REQUEST_SUCCESS';
export const CURRENCY_REQUEST_ERROR = 'CURRENCY_REQUEST_ERROR';

export const currencyRequest = () => ({
  type: CURRENCY_REQUEST,
});

export const currencyRequestSuccess = (data) => ({
  type: CURRENCY_REQUEST_SUCCESS,
  data,
});

export const currencyRequestError = (error) => ({
  type: CURRENCY_REQUEST_ERROR,
  error,
});

const addCurrencySign = (obj) => {
  const currencySign = {
    AUD: '$',
    BTC: '₿',
    BYR: 'Br',
    CAD: '$',
    CHF: 'Fr',
    CNH: '¥',
    EUR: '€',
    GBP: '£',
    HKD: '$',
    JPY: '¥',
    NZD: '$',
    RUB: '₽',
    UAH: '₴',
    USD: '$',
  };

  return Object.keys(obj).map((currency) => {
    Object.keys(currencySign).map((sign) => {
      if (currency === sign) {
        return (obj[currency].amount = `${obj[currency].amount.toFixed(2)} ${
          currencySign[sign]
        }`);
      }
    });
    return obj[currency];
  });
};

export const currencyRequestAsync = () => (dispatch) => {
  const token = localStorage.getItem('bearer');

  if (!token || token === 'undefined') return;
  dispatch(currencyRequest());

  fetch(`${URL_API}/currencies`, {
    method: 'GET',
    headers: {
      Authorization: `Basic ${token}`,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      dispatch(currencyRequestSuccess(addCurrencySign(data.payload)));
    })
    .catch((error) => dispatch(currencyRequestError(error)));
};
