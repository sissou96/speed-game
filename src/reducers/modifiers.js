import { hasAPlayerWon, getWinner } from '../Rules'

export const moveCard = (sourceStack, targetStack, state) => {
  let sourceCard = state.stacks[sourceStack][0]
  let newSourceStack = {}
  newSourceStack[sourceStack] =
    state.stacks[sourceStack].slice(1)

  let newTargetStack = {}
  newTargetStack[targetStack] = [
    sourceCard,
    ...state.stacks[targetStack]
  ]

  let stacks = {
    ...state.stacks, 
    ...newSourceStack,
    ...newTargetStack
  }
  return  {...state, stacks}
}

export const pickCards = (state) => {
  const pick1 = state.picks["pick1"]
  const pick2 = state.picks["pick2"]

  if (pick1.length > 0 && pick2.length > 0) {
    const stack6 = state.stacks["stack6"]
    const stack7 = state.stacks["stack7"]
    
    const newStacks = {
      stacks: {
        ...state.stacks,
        "stack6" : [pick1[0], ...stack6],
        "stack7" : [pick2[0], ...stack7]
      }
    }

    const newPicks = {
      picks: {
        "pick1": pick1.slice(1),
        "pick2": pick2.slice(1)
      }
    }

    let newState = {
      ...state,
      ...newStacks,
      ...newPicks
    }
    newState = revealCard(newState, pick1[0])
    newState = revealCard(newState, pick2[0])

    return newState
  }
  return state
}

export const revealCard = (state, cardID) => {
  let card = state.cards[cardID]
  let newCard = {}
  newCard[cardID] = {...card, hidden: false}
  let newCards = {
    cards: {
      ...state.cards,
      ...newCard
    }
  }
  return {
    ...state,
    ...newCards
  }
}

export const updateGameState = (state) => {
  if (hasAPlayerWon(state)) {
    let newState = {...state, gameFinished: true, winner: getWinner(state)}
    return newState 
  }
  return state
}
