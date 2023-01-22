/* eslint-disable max-len */
// import { filterGraphData } from '../../utils/filterGraphData';
import { filterUniqueDateValues } from '../../utils/filterUniqueDateValues';
import { filterDatesByCurrentWeek } from '../../utils/formatDate';

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
      if (data.payload.transactions.length > 100) {
        data.payload.transactions = {
          lineGraph: filterUniqueDateValues(
            data.payload.transactions.reverse(),
            '2022'
          ),
          historyTable: [...data.payload.transactions.slice(-9)],
          statisticGraph: {
            // week: filterDatesByCurrentWeek(data.payload.transactions, 'week'),
            month: filterDatesByCurrentWeek(data.payload.transactions, 'month'),
          },
        };
        console.log(data.payload);
      }
      // dispatch(userAccountInfoRequestSuccess(data.payload));
    })
    .catch((error) => dispatch(userAccountInfoRequestError(error)));
};
