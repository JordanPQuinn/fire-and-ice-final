import React from 'react';
import { shallow } from 'enzyme';
import { CardContainer } from './CardContainer';
import { mockData } from '../../Utilities/mockData'


describe('CardContainer Component', () => {
   it('should exist', () => {
    const wrapper = shallow(<CardContainer houses={mockData.houses} />)
    
    expect(wrapper).toMatchSnapshot();
  });
});