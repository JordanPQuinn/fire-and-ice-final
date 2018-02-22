import { storeHouses, storeSwornMembers } from './index';
import { mockData } from '../Utilities/mockData';

describe('actions', () => {
  describe('storeHouses action', () => {
    it('should have a type of STORE_HOUSES', () => {
      const housesAction = storeHouses(mockData);

      expect(housesAction.type).toEqual('STORE_HOUSES');
    });

    it('should have a payload equal to the houses mockdata', () => {
      const housesAction = storeHouses(mockData);

      expect(housesAction.houses).toEqual(mockData);
    });
  });

  describe('storeSwornMembers action', () => {
    it('should have a tpye of SWORN_MEMBERS', () => {
      const membersAction = storeSwornMembers(mockData);

      expect(membersAction.type).toEqual('STORE_MEMBERS');
    });

    it('should have a payload equal to the members mockdata', () => {
      const membersAction = storeSwornMembers(mockData.houses[0].swornMembers);

      expect(membersAction.members).toEqual(mockData.houses[0].swornMembers);
    });
  })
});