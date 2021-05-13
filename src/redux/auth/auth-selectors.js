const getIsAuthenticated = state => state.auth.isLogedIn;
const getEmail = state => state.auth.user.email;
const getName = state => state.auth.user.name;
// eslint-disable-next-line
export default {
  getIsAuthenticated,
  getEmail,
  getName,
};
