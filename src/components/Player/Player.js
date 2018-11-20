import React from 'react'
import Stack from '../Stack/Stack'
import { connect } from 'react-redux'
import './Player.css'

const mapStateToProps = (state, ownProps) => {
  return {
    stacks: state.players[ownProps.id].stacks
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

const player = (props) => {
  const stacks = props.stacks.map((id) => (
    <Stack key={id} id={id} />
  ))
  return (
    <div className="Player">
      {stacks}
    </div>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(player)