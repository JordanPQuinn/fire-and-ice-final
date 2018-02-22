import React from 'react';
import { connect } from 'react-redux';
import { Card } from '../Card/Card';

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

export default connect(mapStateToProps, null)(CardContainer)