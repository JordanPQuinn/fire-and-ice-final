import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card } from '../Card/Card';
import PropTypes from 'prop-types';
import { getSwornMembers } from '../../Utilities/api-helper';
import { storeSwornMembers } from '../../actions/index';

export class CardContainer extends Component {
  handleChildClick = async (name, swornMembers) => {
    const fetchedMembers = await getSwornMembers(swornMembers)
    const membersToStore = {[name] : [fetchedMembers]}
    this.props.storeSwornMembers(membersToStore);
  }

  createCards = ({houses}) => {
    return houses.map( (house, i) => {
      return <Card {...house} 
        key={house + i} 
        handleClick={this.handleChildClick}
        members={this.props.members} 
      /> 
    })
  }

  render() {
    return(
    <div className='Container'>
      {this.createCards(this.props)}
    </div>
    )
  }
}

CardContainer.propTypes = {
  houses: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string,
      name: PropTypes.string,
      seats: PropTypes.array,
      coatOfArms: PropTypes.string,
      titles: PropTypes.array,
      ancestralWeapons: PropTypes.array,
      swornMembers: PropTypes.array
    })
  )
}

export const mapDispatchToProps = dispatch => ({
  storeSwornMembers: members => dispatch(storeSwornMembers(members))
});

export const mapStateToProps = ({houses, members}) => ({
  houses,
  members
});

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer)