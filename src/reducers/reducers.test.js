import { housesReducer } from './houses-reducer';
import { membersReducer } from './members-reducer';
import { rootReducer } from './root-reducer';
import { mockData, mockAction1, mockAction2 } from '../Utilities/mockData';

describe('reducers', () => {
  describe('housesReducer', () => {
    it('should return an empty array by default', () => {
      const newState = housesReducer(undefined, {type: 'NOT_THE_THING'});

      expect(newState).toEqual([]);
    });

    it('should return an array of houses if the type is STORE_HOUSES', () => {
      const newState = housesReducer(undefined, mockAction1);

      expect(newState).toEqual(mockData.houses);
    });
  });

  describe('membersReducer', () => {
    it('should return an empty array by default', () => {
       const newState = membersReducer(undefined, {type: 'NOT_THE_THING'});

      expect(newState).toEqual([]);
    });

    it('should return an array of houses if the type is STORE_MEMBERS', () => {
      const newState = membersReducer(undefined, mockAction2);

      expect(newState).toEqual(mockData.swornMembers);
    });
  })
});