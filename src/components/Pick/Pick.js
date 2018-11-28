import React from 'react'

const pick = (props) => {
  let card = null
  if (props.card) {
    card = <Card id={props.card} />
  }
  return (
    <div className="Pick">
      {card}
    </div>
  )
}

export default pick