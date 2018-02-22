import React from 'react';
import { fetchApi, getSwornMembers, cleanMemberData } from './api-helper';
import { mockData } from './mockData';

describe('api helper', () => {
  beforeAll(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        status: 200,
        json: () => Promise.resolve({
          houses: mockData.houses
        })
      })
    })
  })

  describe('fetchApi', () => {
    it('should call window.fetch with the correct URL', () => {
      const url = 'http://localhost:3001/api/v1/houses';
      fetchApi(url);

      expect(window.fetch).toHaveBeenCalledWith(url);
    })

    it('should return an array of house objects', async () => {
      const url = 'http://localhost:3001/api/v1/houses';
      const houseObject = await fetchApi(url);

      expect(houseObject).toEqual(mockData)
    });
  });

  describe('getSwornMembers', () => {
    beforeAll(() => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          status: 200,
          json: () => Promise.resolve({
            members: []
          })
        })
      })
    })

    it('should call window.fetch with the correct URLs', () => {
      getSwornMembers(mockData.houses[0].swornMembers);

      expect(window.fetch).toHaveBeenCalledWith('https://www.anapioficeandfire.com/api/characters/255');
      expect(window.fetch).toHaveBeenCalledWith('https://www.anapioficeandfire.com/api/characters/256');
      expect(window.fetch).toHaveBeenCalledWith('https://www.anapioficeandfire.com/api/characters/447');
      expect(window.fetch).toHaveBeenCalledWith('https://www.anapioficeandfire.com/api/characters/654');
      expect(window.fetch).toHaveBeenCalledWith('https://www.anapioficeandfire.com/api/characters/677');
      expect(window.fetch).toHaveBeenCalledWith('https://www.anapioficeandfire.com/api/characters/681');
      expect(window.fetch).toHaveBeenCalledWith('https://www.anapioficeandfire.com/api/characters/871');
      expect(window.fetch).toHaveBeenCalledWith('https://www.anapioficeandfire.com/api/characters/1182');
    });

    it('should return an array of names and deaths as undefined for each endpoint/member', async () => {

      const array = await getSwornMembers(mockData.houses[0].swornMembers)

      expect(array).toEqual([
        {name: undefined, died: undefined},
        {name: undefined, died: undefined},
        {name: undefined, died: undefined},
        {name: undefined, died: undefined},
        {name: undefined, died: undefined},
        {name: undefined, died: undefined},
        {name: undefined, died: undefined},
        {name: undefined, died: undefined},
      ]);
    });
  });

  describe('cleanMemberData', () => {
    it('should be return a cleand member object', () => {
      const mockMember = [{thing: 'dont need this', or:'this', name:'need this tho', died:'and this'}];
      const cleanedMember = cleanMemberData(mockMember);
      const expectedMember = [{name:'need this tho', died:'and this'}]

      expect(cleanedMember).toEqual(expectedMember);
    });
  })
});