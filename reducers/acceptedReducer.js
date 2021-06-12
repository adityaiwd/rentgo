export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_INVOICE_ACCEPTED':
      return action.payload;
    default:
      return state;
  }
};
