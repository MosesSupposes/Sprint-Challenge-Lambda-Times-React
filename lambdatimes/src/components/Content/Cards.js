import React from 'react'
import Card from './Card'
import PropTypes from 'prop-types'


export default function Cards (props) {
  const renderCard = (mappedVal, i) => <Card key={i} {...mappedVal} />
  return (
    <div className="cards-container">
      {
        props.cards.map(renderCard)
      }
    </div>
  )
}

Cards.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({
    headline: PropTypes.string.isRequired,
    tab: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
  })).isRequired
}


// ---- Instructions ----

/* 
  Using the cards prop, map over the list creating a 
  new Card component for each passing the card as the only prop.
*/

// Make sure you include prop types for all of your incoming props
