export const membersReducer = (state=[], action) => {
  switch (action.type) {
    case 'STORE_MEMBERS':
      return action.members
    default:
      return state;
  }
};
