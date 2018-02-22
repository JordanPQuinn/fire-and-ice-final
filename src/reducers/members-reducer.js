export const membersReducer = (state=[], action) => {
  switch (action.type) {
    case 'STORE_MEMBERS':
      const filteredState = state.filter( house => {
        return Object.keys(house)[0] !== action.name
      })
      return [...filteredState, {[action.name] : action.members}]
    default:
      return state;
  }
};
