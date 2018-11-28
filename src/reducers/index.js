import { moveCard, revealCard, pickCards, updateGameState } from './modifiers'

export default (state, action) => {
  switch(action.type) {
    case 'MOVE_CARD':
      let newState = moveCard(action.source, action.target, state)
      return updateGameState(newState)
    case 'PICK_CARDS':
      return pickCards(state)
    case 'REVEAL_CARD':
      return revealCard(state, action.cardID)
    default:
      return state
  }
}