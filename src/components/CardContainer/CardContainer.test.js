import React from 'react';
import { shallow } from 'enzyme';
import { CardContainer } from './CardContainer';
import { mapStateToProps } from './CardContainer'
import { mockData } from '../../Utilities/mockData';


describe('CardContainer Component', () => {
  it('should exist', () => {
    const wrapper = shallow(<CardContainer houses={mockData.houses} />)
    
    expect(wrapper).toMatchSnapshot();
  });

  it('MSTP should return a state object with the mockData', () => {
    const houses = mapStateToProps(mockData);

    expect(houses).toEqual(mockData)
  });
});