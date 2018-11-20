import React from 'react'
import { ItemTypes } from '../../ItemTypes'
import { DragSource } from 'react-dnd'
import { connect } from 'react-redux'
import './Card.css'

const cardSource = {
  beginDrag(props) {
    return {};
  }
}

const collect = (connect, monitor) => {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

const getAspectFromId = (state, id) => {
  let card = state.cards[id]
  return card.value.toString() + card.suit
}

const mapStateToProps = (state, ownProps) => {
  return {
    aspect: getAspectFromId(state, ownProps.id)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

const card = (props) => {
  return props.connectDragSource(
    <div className="Card" style={{ opacity: props.isDragging ? 0.5 : 1}}>
      <div className="Card__face Card__face--back"></div>
      <div className="Card__face Card__face--front">{props.aspect}</div>
    </div>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DragSource(ItemTypes.CARD, cardSource, collect)(card))