export const housesReducer = (state=[], action) => {
  switch (action.type) {
    case 'STORE_HOUSES':
      return action.houses
    default:
      return state;
  }
};
