import React from 'react';
import { shallow } from 'enzyme';
import { Card, mapStateToProps, mapDispatchToProps } from './Card';
import * as api from '../../Utilities/api-helper';
import { mockData } from '../../Utilities/mockData'

describe('Card Component', () => {
  it('should exist', () => {
    const wrapper = shallow(<Card titles={mockData.houses[0].titles} />)
    
    expect(wrapper).toMatchSnapshot();
  });
  it('should change state on a click', () => {
    api.getSwornMembers = () => (mockData.houses[0].swornMembers)
    const wrapper = shallow(
      <Card 
        titles={mockData.houses[0].titles} 
        members={mockData.houses[0].swornMembers}
        storeSwornMembers={jest.fn()} 
      />)

    wrapper.simulate('click');
    wrapper.update();
    expect(wrapper.state().clicked).toEqual(true);
  })

})