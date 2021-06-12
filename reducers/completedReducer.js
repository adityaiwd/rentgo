export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_INVOICE_COMPLETED':
      return action.payload;
    default:
      return state;
  }
};
