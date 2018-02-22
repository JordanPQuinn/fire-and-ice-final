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
  });

  it('should map the snapshot if the card is clicked', () => {
    api.getSwornMembers = () => (mockData.houses[0].swornMembers)
    const wrapper = shallow(
      <Card 
        titles={mockData.houses[0].titles} 
        members={mockData.houses[0].swornMembers}
        storeSwornMembers={jest.fn()} 
      />)

    wrapper.simulate('click');
    wrapper.update();

    expect(wrapper).toMatchSnapshot();
  });

  it('should call dispatch when MDTP is called', () => {
    const mockDispatch = jest.fn();
    const mapped = mapDispatchToProps(mockDispatch());

    expect(mockDispatch).toHaveBeenCalled();
  });

  it('should return a new state object when MSTP is called', () => {
    const members = mapStateToProps(mockData.houses[0].swornMembers);
    const expectedMembers = {members: undefined}
    
    expect(members).toEqual(expectedMembers)
  });

  it('if there are swornMembers in props, it should return a number of p tags equal to the length of that array', () => {
     const wrapper = shallow(
      <Card 
        titles={mockData.houses[0].titles} 
        members={mockData.houses[0].swornMembers}
        storeSwornMembers={jest.fn()} 
      />)
     expect(wrapper.props('members').children.length).toEqual(8);
  })
});