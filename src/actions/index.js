export const storeHouses = houses => ({
  type: 'STORE_HOUSES',
  houses
});

export const storeSwornMembers = (name, members) => ({
  type: 'STORE_MEMBERS',
  members,
  name
})
