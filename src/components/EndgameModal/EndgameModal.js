import React from 'react'
import { connect } from 'react-redux'
import './EndgameModal.css'

const mapStateToProps = (state) => {
  return {
    gameFinished: state.gameFinished,
    winner: state.winner
  }
}

const mapDispatchToProps = (dispatch) => ({})


const endgameModal = (props) => {
  let classes = ""
  if (props.gameFinished) {
    classes = "EndgameModal"
  } else {
    classes = "EndgameModal EndgameModal--hidden"

  }
  return (
    <div className={classes}>
      <h2 className="EndgameModal__text">{props.winner} WON !</h2>
    </div>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(endgameModal)