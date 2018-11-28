import React from 'react'
import { ItemTypes } from '../../ItemTypes'
import { DragSource } from 'react-dnd'
import { connect } from 'react-redux'
import { revealCard } from '../../actions'
import './Card.css'

const cardSource = {
  beginDrag(props) {
    return {sourceId: props.stack};
  }
}

const collect = (connect, monitor) => {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}


const mapStateToProps = (state, ownProps) => {
  return {
    value: state.cards[ownProps.id].value,
    suit: state.cards[ownProps.id].suit,
    hidden: state.cards[ownProps.id].hidden
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClickHandler: () => {
      dispatch(revealCard(ownProps.id))
    }
  }
}

const getValue = (value) => {
  switch(value) {
    case 1: return 'A'
    case 11: return 'J'
    case 12: return 'Q'
    case 13: return 'K'
    default: return value.toString()
  }
}

const getSuit = (suit) => {
  switch(suit) {
    case 'S': return '♠'
    case 'H': return '♥'
    case 'C': return '♣'
    case 'D': return '♦'
    default: return ""
  }
}

const renderCardFace = (props) => {
  if (props.hidden) {
    return <div className="Card__face Card__face--back"></div>
  } else {
    let isRed = props.suit === 'H' || props.suit === 'D'
    return (
      <div className="Card__face Card__face--front" style={{ color: isRed ? 'red' : 'black'}}>
        <p className="Card__value">{getValue(props.value)}</p>
        <p className="Card__suit">{getSuit(props.suit)}</p>
      </div>
    )
  }
}

const card = (props) => {
  return props.connectDragSource(
    <div
      className="Card"
      onClick={props.onClickHandler}
      style={{ opacity: props.isDragging ? 0.5 : 1}}>
      {renderCardFace(props)}
    </div>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DragSource(ItemTypes.CARD, cardSource, collect)(card))