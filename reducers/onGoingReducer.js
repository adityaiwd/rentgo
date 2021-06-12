export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_INVOICE_ON_GOING':
      return action.payload;
    default:
      return state;
  }
};
