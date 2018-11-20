import React from 'react'
import { ItemTypes } from '../../ItemTypes'
import { DragSource } from 'react-dnd'
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

const card = (props) => {
  return props.connectDragSource(
    <div className="Card" style={{ opacity: props.isDragging ? 0.5 : 1}}>
      <div className="Card__face Card__face--back"></div>
      <div className="Card__face Card__face--front">{props.aspect}</div>
    </div>
  )
}

export default DragSource(ItemTypes.CARD, cardSource, collect)(card)