import React from 'react';
import { fetchApi } from './api-helper';
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
    })
  })
})