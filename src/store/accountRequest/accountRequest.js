export const USER_REQUEST = 'USER_REQUEST';
export const USER_REQUEST_SUCCESS = 'USER_REQUEST_SUCCESS';
export const USER_REQUEST_ERROR = 'USER_REQUEST_ERROR';

export const userRequest = () => ({
  type: USER_REQUEST,
});

export const userRequestSuccess = (data) => ({
  type: USER_REQUEST_SUCCESS,
  data,
});

export const userRequestError = (error) => ({
  type: USER_REQUEST_ERROR,
  error,
});

export const userRequestAsync = (userName, userPassword) => (dispatch) => {
  const token = localStorage.getItem('bearer');
  if (token) return;
  dispatch(userRequest());

  fetch('http://localhost:4000/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      login: userName,
      password: userPassword,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      dispatch(userRequestSuccess(data.payload.token));
      localStorage.setItem('bearer', data.payload.token);
    })
    .catch((error) => dispatch(userRequestError(error)));
};
