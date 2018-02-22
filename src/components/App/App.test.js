import React from 'react';
import { App } from './App';
import { shallow } from 'enzyme';
import * as api from '../../Utilities/api-helper';
import { mockData } from '../../Utilities/mockData'
import { mapDispatchToProps } from './App';

describe('App Component', () => {
  beforeAll(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        status: 200,
        json: () => Promise.resolve({
          houses: mockData 
        })
      })
    })
  })

  it('should exist', () => {
    const wrapper = shallow(<App storeHouses={jest.fn()}/>);

    expect(wrapper).toMatchSnapshot();
  })

  it('should call fetch on CDM', () => {
    api.getHouses = (url) => {mockData}
    api.dataCleaner = (houses) => {mockData}
    const url = 'http://localhost:3001/api/v1/houses';
    const wrapper = shallow(<App storeHouses={jest.fn()} />)

    expect(window.fetch).toHaveBeenCalledWith(url);
  });

  it('should call dispatch in MDTP', () => {
    const mockDispatch = jest.fn();
    const mapped = mapDispatchToProps(mockDispatch());

    expect(mockDispatch).toHaveBeenCalled();
  })

  it('should match the snapshot if the loaded state changes', () => {
    const wrapper = shallow(<App storeHouses={jest.fn()}/>)
    wrapper.setState({loaded:true})

    expect(wrapper).toMatchSnapshot();
  });
});