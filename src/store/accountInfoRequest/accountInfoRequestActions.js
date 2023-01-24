/* eslint-disable max-len */
import {
  filterDatesByCurrentWeek,
  filterUniqueDateValues,
} from '../../utils/formatDate';

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
      data.payload.transactions = {
        lineGraph: filterUniqueDateValues(
          data.payload.transactions.reverse(),
          '2022'
        ).reverse(),
        historyTable: [...data.payload.transactions.slice(-9)],
        statisticGraph: filterDatesByCurrentWeek(data.payload),
      };

      dispatch(userAccountInfoRequestSuccess(data.payload));
    })
    .catch((error) => dispatch(userAccountInfoRequestError(error)));
};
