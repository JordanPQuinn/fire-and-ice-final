import React, { Component } from 'react';
import './Card.css';
import PropTypes, { shape, func, string } from 'prop-types';
import { connect } from 'react-redux';
import { getSwornMembers } from '../../Utilities/api-helper';
import { storeSwornMembers } from '../../actions/index';


export class Card extends Component {
  constructor(props) {
    super(props)
    this.state = {
      clicked: false
    }
  }

  handleClick = async () => {
    const { clicked } = this.state
    this.setState({
      clicked: !clicked
    })
    const members = await getSwornMembers(this.props.swornMembers)
    this.props.storeSwornMembers(members);
  }

  displayMembers = (members) => {
    return members.map( member => <p> {member.name}: {member.died} </p> )
  }

  render() {
    const {name, founded, seats, titles, coatOfArms, ancestralWeapons, words} = this.props;
    const foundedDisplay = !founded ? 
    <h2> Founded: N/A </h2> :
    <h2> Founded: { founded } </h2>

    const titlesLines = titles.map ( title => {
      return <p key={title}> Titles: {title} </p>
    })

    return(
      <div className='Card' onClick={this.handleClick}>
        <h1> {name} </h1>
        {foundedDisplay}
        <h2> {words} </h2>
        <p> Seats: {seats} </p>
        <div>
          { titlesLines }
        </div>
        <p> Coat of Arms: {coatOfArms} </p>
        { this.state.clicked && this.displayMembers(this.props.members) }
      </div>
    )
  } 
}

Card.propTypes = {
  house: PropTypes.shape({
    name: PropTypes.string,
    seats: PropTypes.array,
    coatOfArms: PropTypes.string,
    titles: PropTypes.array,
    ancestralWeapons: PropTypes.array,
    swornMembers: PropTypes.array
  })
}

export const mapDispatchToProps = dispatch => ({
  storeSwornMembers: members => dispatch(storeSwornMembers(members))
})

export const mapStateToProps = state => ({
  members: state.members
})

export default connect(mapStateToProps, mapDispatchToProps)(Card);