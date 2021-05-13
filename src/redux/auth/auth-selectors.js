const getIsAuthenticated = state => state.auth.isLogedIn;
const getName = state => state.auth.user.name;
// eslint-disable-next-line
export default {
  getIsAuthenticated,
  getName,
};
