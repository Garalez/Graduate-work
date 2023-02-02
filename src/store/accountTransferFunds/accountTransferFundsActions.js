/* eslint-disable max-len */

export const ACCOUNT_TRANSFER_FUNDS = 'ACCOUNT_TRANSFER_FUNDS';
export const ACCOUNT_TRANSFER_FUNDS_SUCCESS = 'ACCOUNT_TRANSFER_FUNDS_SUCCESS';
export const ACCOUNT_TRANSFER_FUNDS_ERROR = 'ACCOUNT_TRANSFER_FUNDS_ERROR';

export const accountTransferFundsRequest = () => ({
  type: ACCOUNT_TRANSFER_FUNDS,
});

export const accountTransferFundsRequestSuccess = () => ({
  type: ACCOUNT_TRANSFER_FUNDS_SUCCESS,
});

export const accountTransferFundsRequestError = (error) => ({
  type: ACCOUNT_TRANSFER_FUNDS_ERROR,
  error,
});

export const accountTransferFundsRequestAsync =
  ({ from, to, amount }) =>
    (dispatch) => {
      const token = localStorage.getItem('bearer');

      if (!token || token === 'undefined') return;
      dispatch(accountTransferFundsRequest());

      const transferData = {
        from,
        to,
        amount,
      };

      fetch(`http://localhost:4000/transfer-funds`, {
        method: 'POST',
        headers: {
          'Authorization': `Basic ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(transferData),
      })
        .then((response) => response.json())
        .then(() => {
          dispatch(accountTransferFundsRequestSuccess());
        })
        .catch((error) => dispatch(accountTransferFundsRequestError(error)));
    };
