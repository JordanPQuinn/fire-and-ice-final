import React from 'react';
import { connect } from 'react-redux';
import { Card } from '../Card/Card';
import PropTypes, { shape, func, string } from 'prop-types';


export const CardContainer = ({houses}) => {
  const cards = houses.map( (house, i) => {
    return <Card {...house} key={house + i} />
  })

  return(
    <div className='Container'>
      {cards}
    </div>
  )
}

export const mapStateToProps = ({houses}) => ({
  houses
})

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
  ),
}

export default connect(mapStateToProps, null)(CardContainer)