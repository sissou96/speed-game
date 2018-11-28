import store from './store'


const itemInArray = (item, array) => {
  return array.indexOf(item) > -1
}

const sourceAndTargetInPlayer = (source, target, stacks) => {
  return itemInArray(source, stacks) && itemInArray(target, stacks)
}

const targetBelongsToSamePlayer = (source, target) => {
  let player1Stacks = store.getState().players["player1"].stacks
  let player2Stacks = store.getState().players["player2"].stacks
  return sourceAndTargetInPlayer(source, target, player1Stacks) ||
         sourceAndTargetInPlayer(source, target, player2Stacks)
}

const targetIsNeutral = (target) => {
  let neutralStacks = store.getState().board.stacks
  return itemInArray(target, neutralStacks)
}

const isNeighborValue = (sourceValue, targetValue) => {
  let delta = Math.abs(sourceValue - targetValue)
  return delta === 1 || delta === 12
}

const targetIsEmpty = (target) => {
  let targetCards = store.getState().stacks[target]
  return targetCards.length === 0
}

const sourceBelongsToNoPlayer = (source) => {
  return source === "stack6" || source === "stack7"
}

const cardIsHidden = (sourceCard) => {
  let state = store.getState()
  return state.cards[sourceCard].hidden
}

export const canMoveCard = (source, target) => {

  if (source === target) {
    return false
  }
  if (targetIsEmpty(target)) {
    return true
  }
  if (sourceBelongsToNoPlayer(source)) {
    return false
  }

  let state = store.getState()
  let sourceCardId = state.stacks[source][0]
  let targetCardId = state.stacks[target][0]

  let sourceCard = state.cards[sourceCardId]
  let targetCard = state.cards[targetCardId]

  if (sourceCard) {
    if (sourceCard.hidden) {
      return false
    }

    if (targetCard) {
      if (targetBelongsToSamePlayer(source, target)) {
        return sourceCard.value === targetCard.value
      }
      if (targetIsNeutral(target)) {
        return isNeighborValue(sourceCard.value, targetCard.value)
      }
    }
  }

  return false
}

export const playerStacksAreEmpty = (playerID, state) => {
  return state.players[playerID].stacks
    .every((stackID) => 
      state.stacks[stackID].length === 0
    )
}

export const hasAPlayerWon = (state) => {
  return Object.keys(state.players)
    .some((playerID) => playerStacksAreEmpty(playerID, state))
}

export const getWinner = (state) => {
  return Object.keys(state.players)
    .find((playerID) => playerStacksAreEmpty(playerID, state))
}