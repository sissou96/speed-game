import React from 'react'
import Card from '../Card/Card'

import './Stack.css'

const stack = (props) => {
  let card = null
  if (props.withCard) {
    card = <Card aspect={props.card} />
  }
  return (
    <div className="Stack">
      {card}
    </div>
  )
}

export default stack