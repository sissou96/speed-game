import React from 'react'
import { connect } from 'react-redux'
import { pickCardsAction } from '../../actions'
import './PickCards.css'


const mapDispatchToProps = (dispatch) => {
  return {
    pickCardsOnClick: () => {
      dispatch(pickCardsAction())
    }
  }
}

const mapStateToProps = (state) => ({})

const pickCards = (props) => {
  return (
    <button
      className="PickCards"
      onClick={props.pickCardsOnClick}>
      Pick Cards
    </button>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(pickCards)