const { default: axios } = require('axios');

const functions = {
  add: (a, b) => a + b,
  isNull: () => null,
  checkValue: (x) => x,
  createUser: () => {
    const user = {
      firstName: 'Sam',
    };
    user['lastName'] = 'Ase';
    return user;
  },

  compileAndroidCode: () => {
    throw new Error('you are using the wrong JDK!');
  },

  fetchUser: () =>
    axios
      .get(`https://jsonplaceholder.typicode.com/users/1/`)
      .then((res) => res.data)
      .catch((err) => new Error('error')),
  fetchData: (data) =>
    new Promise((resolves, rejects) => {
      setTimeout(() => {
        if (data === 'sucess') return resolves('promise resolved');
        return rejects('error');
      }, 2000);
    }),
};

module.exports = functions;
