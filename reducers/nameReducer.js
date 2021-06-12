const initialState = {
  email: '',
  name: '',
  is_verified: false,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PROFILE':
      return {
        email: action.payload.email,
        name: action.payload.name,
        is_verified: action.payload.is_verified,
      };
    default:
      return state;
  }
};
