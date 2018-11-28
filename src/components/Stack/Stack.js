import React from 'react'
import Card from '../Card/Card'
import { connect } from 'react-redux'
import { ItemTypes } from '../../ItemTypes'
import { DropTarget } from 'react-dnd'
import { moveCard } from '../../actions'
import { canMoveCard } from '../../Rules'
import './Stack.css'

const stackTarget = {
  canDrop(props, monitor) {
    let source = monitor.getItem().sourceId
    let target = props.id
    return canMoveCard(source, target) 
  },
  drop(props, monitor) {
    let source =  monitor.getItem().sourceId
    let target = props.id
    props.onDropMove(source, target)
  }
}

const collect = (connect, monitor) => {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
  }
}

const getFirstCard = (state, id) => {
  return state.stacks[id][0]
}

const mapStateToProps = (state, ownProps) => {
  return {
    card: getFirstCard(state, ownProps.id),
    stack: state.stacks[ownProps.id]
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onDropMove: (source, target) => {
      dispatch(moveCard(source, target))
    }
  }
}

const getClasses = (props) => {
  if (props.canDrop) {
    return "Stack Stack--green"
  }
  if (!props.canDrop) {
    return "Stack Stack--red"
  }
  return "Stack"
}

const stack = (props) => {
  let card = null
  if (props.card) {
    card = <Card stack={props.id} id={props.card}/>
  }
  return props.connectDropTarget(
    <div style={{
      display: "flex",
      flexDirection: "column"
    }}>
      <div className={props.isOver ? getClasses(props) : "Stack"}>
        {card}
      </div>
      <p style={{ color: "white"}}>{props.stack.length}</p>
    </div>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DropTarget(ItemTypes.CARD, stackTarget, collect)(stack))