/* eslint-disable max-len */
import {
  filterDatesByCurrentWeek,
  filterUniqueDateValues,
} from '../../utils/formatDate';
import { sortArrayByDate } from '../../utils/sortArrayByDate';

export const USER_ACCOUNT_INFO_REQUEST = 'USER_ACCOUNT_INFO_REQUEST';
export const USER_ACCOUNT_INFO_REQUEST_SUCCESS =
  'USER_ACCOUNT_INFO_REQUEST_SUCCESS';
export const USER_ACCOUNT_INFO_REQUEST_ERROR =
  'USER_ACCOUNT_INFO_REQUEST_ERROR';

export const userAccountInfoRequest = () => ({
  type: USER_ACCOUNT_INFO_REQUEST,
});

export const userAccountInfoRequestSuccess = (data) => ({
  type: USER_ACCOUNT_INFO_REQUEST_SUCCESS,
  data,
});

export const userAccountInfoRequestError = (error) => ({
  type: USER_ACCOUNT_INFO_REQUEST_ERROR,
  error,
});

export const userAccountInfoRequestAsync = (id) => (dispatch) => {
  const token = localStorage.getItem('bearer');
  if (!token || token === 'undefined') return;
  dispatch(userAccountInfoRequest());

  fetch(`http://localhost:4000/account/${id}`, {
    method: 'GET',
    headers: {
      Authorization: `Basic ${token}`,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const lastNineTransactions = [...data.payload.transactions.slice(-9)];

      data.payload.transactions = {
        lineGraph: filterUniqueDateValues(data.payload.transactions, '2022'),
        historyTable: sortArrayByDate(lastNineTransactions),
        statisticGraph: filterDatesByCurrentWeek(data.payload),
      };

      dispatch(userAccountInfoRequestSuccess(data.payload));
    })
    .catch((error) => dispatch(userAccountInfoRequestError(error)));
};
