const initialState = {
  isAuthenticated: false,
  token: '',
};
export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_USER':
      return {
        isAuthenticated: action.payload ? true : false,
        token: action.payload,
      };
    case 'LOGOUT_USER':
      return {
        isAuthenticated: false,
        token: '',
      };
    default:
      return state;
  }
};
