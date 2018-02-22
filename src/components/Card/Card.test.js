import React from 'react';
import { shallow } from 'enzyme';
import { Card } from './Card';
import { mockData } from '../../Utilities/mockData'

describe('Card Component', () => {
  it('should exist', () => {
    const wrapper = shallow(<Card titles={mockData.houses[0].titles} />)
    
    expect(wrapper).toMatchSnapshot();
  })
})