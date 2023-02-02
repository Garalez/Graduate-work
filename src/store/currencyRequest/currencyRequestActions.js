/* eslint-disable max-len */

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

export const currencyRequestAsync = (from, to, amount) => (dispatch) => {
  const token = localStorage.getItem('bearer');

  if (!token || token === 'undefined') return;
  dispatch(currencyRequest());

  const transferData = {
    from,
    to,
    amount,
  };

  fetch(`http://localhost:4000/${from ? 'currency-buy' : 'currencies'}`, {
    method: `${from ? 'POST' : 'GET'}`,
    headers: {
      'Authorization': `Basic ${token}`,
      'Content-Type': 'application/json',
    },
    body: from ? JSON.stringify(transferData) : '',
  })
    .then((response) => response.json())
    .then((data) => {
      dispatch(currencyRequestSuccess(data.payload));
    })
    .catch((error) => dispatch(currencyRequestError(error)));
};
