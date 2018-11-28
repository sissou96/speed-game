export const moveCard = (sourceStack, targetStack) => {
  return {
    type: 'MOVE_CARD',
    source: sourceStack,
    target: targetStack
  }
}

export const pickCardsAction = () => {
  return {
    type: 'PICK_CARDS'
  }
}

export const revealCard = (cardID) => {
  return {
    type: 'REVEAL_CARD',
    cardID: cardID
  }
}

export const updateGame = () => {
  return {
    type: 'UPDATE_GAME_STATE'
  }
}
