import React, { Component } from 'react';
import './Card.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


export class Card extends Component {
  constructor(props) {
    super(props)

    this.state = {
      clicked: false
    }
  }

  changeClickState = () => {
    this.props.handleClick(this.props.swornMembers);
    const { clicked } = this.state
    this.setState({
      clicked: !clicked
    })
  }

  displayMembers = (members) => {
    return members.map( member => <p key={member.name + member.died}> {member.name}: {member.died} </p> )
  }

  foundedDisplay = (founded) => {
    return !founded ? 
      <h2> Founded: N/A </h2> :
      <h2> Founded: { founded } </h2>
  }

  render() {
    const {name, founded, seats, titles, coatOfArms, ancestralWeapons, words} = this.props;
    const titlesLines = titles.map ( title => {
      return <p key={title}> Titles: {title} </p>
    });

    return(
      <div className='Card' onClick={this.changeClickState}>
        <h1> {name} </h1>
        {this.foundedDisplay(founded)}
        <h2> {words} </h2>
        <p> Seats: {seats} </p>
        <div>
          {titlesLines}
        </div>
        <p> Coat of Arms: {coatOfArms} </p>
        <p> {ancestralWeapons} </p>
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
};

export const mapStateToProps = state => ({
  members: state.members
});

export default connect(mapStateToProps, null)(Card);