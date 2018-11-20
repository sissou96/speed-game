import React from 'react'
import Card from '../Card/Card'
import { connect } from 'react-redux'
import './Stack.css'

const getFirstCard = (state, id) => {
  return state.stacks[id][0]
}

const mapStateToProps = (state, ownProps) => {
  return {
    card: getFirstCard(state, ownProps.id) 
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}


const stack = (props) => {
  let card = null
  if (props.card) {
    card = <Card id={props.card}/>
  }
  return (
    <div className="Stack">
      {card}
    </div>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(stack)