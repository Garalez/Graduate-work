export const createNewUserAccount = () => {
  const token = localStorage.getItem('bearer');
  if (!token && token === 'undefined') return;

  fetch('http://localhost:4000/create-account', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${token}`,
    },
  })
    .catch((error) => console.log(error));
};
