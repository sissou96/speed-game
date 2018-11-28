import { createStore } from 'redux'
import reducers from '../reducers' 

export const createCards = () => {
  let suits = ['S', 'H', 'C', 'D']
  let cards = {}
  let counter = 1
  let id = ""
  suits.forEach((suit) => {
    for (let i = 1; i <= 13; i++) {
      id = "card" + counter.toString()
      cards[id] = {
        suit: suit,
        value: i,
        hidden: true
      }
      counter++
    }
  })
  return cards
}

export const createStacks = () => {
  let stacks = {}
  let id = ""
  for (let i = 1; i <= 12; i++) {
    id = "stack".concat(i.toString())
    stacks[id] = []
  }
  return stacks
}

export const createPlayers = () => {
  return {
    "player1": {
      stacks: ["stack1", "stack2", "stack3", "stack4", "stack5"]
    },
    "player2": {
      stacks: ["stack8", "stack9", "stack10", "stack11", "stack12"]
    }
  }
}

export const createBoard = () => {
  return {
    stacks: ["stack6", "stack7"],
    picks: ["pick1", "pick2"]
  }
}

export const createPicks = () => {
  return {
    "pick1": [],
    "pick2": [],
  } 
}

export const createInitialState = () => ({
  cards: createCards(),
  stacks: createStacks(),
  picks: createPicks(),
  players: createPlayers(),
  board: createBoard(),
  gameFinished: false,
  winner: ""
})

// Return the ID of all stacks belonging to any player
export const getPlayersStacks = (players) => {
  const playersID = Object.keys(players)
  const stacks = playersID.map((playerId) => {
    return players[playerId].stacks
  })
  return stacks.reduce((acc, curr) => acc.concat(curr))
}

// getNotFullStacks takes in stack IDs and returns only those who 
// don't have a length greater than the threshold value
export const getNonFullStacks = (state, stackIDs, threshold) => {
  return stackIDs.filter((stackId) =>
    state.stacks[stackId].length < threshold
  )
}

// getRandomIndex returns a random index of a list
export const getRandomIndex = (length) => {
  return Math.floor(Math.random() * length)
}

// removeCard returns a list of cards without
export const removeCard = (index, cards) => {
  return cards.filter((card, i) => i !== index)
}
// export const removeCard = (index, cards) => {
//   let firstPart = cards.slice(0, index)
//   let secondPart = cards.slice(index+1, cards.length)
//   let result = firstPart.concat(secondPart)
//   return result
// }

// addCard allows you to add a cardID to a given
// element of the state (either a pick or a stack mostly)
export const addCard = (elementKey, id, card, state) => {
  if (Array.isArray(state[elementKey][id])) {
    let newElement = {}
    newElement[id] = [card, ...state[elementKey][id]]

    if (typeof(state[elementKey]) === "object") {
      let newElements = {}
      newElements[elementKey] = {...state[elementKey],...newElement}
      return {...state,...newElements}
    }
  }
  return state
}

export const moveRandomCard = (collections, collectionID, cards, state,) => {
  var cardID = getRandomIndex(cards.length);
  var card = cards[cardID];
  var newState = addCard(collections, collectionID, card, state)
  var newCards = removeCard(cardID, cards)
  return {
    cards: newCards,
    state: newState
  }
}

export const revealTopCards = (state) => {
  let topCards = Object.keys(state.stacks)
    .map((stackID) => state.stacks[stackID][0])
    .filter((card) => card)

  let newCards = { cards: state.cards}
  topCards.forEach((cardID) => newCards.cards[cardID].hidden = false)
  return {
    ...state,
    ...newCards
  }
}

export const initStacksAndPicks = (initialState) => {
  var state = {...initialState}
  var cards = Object.keys(state.cards)
  var stackIDs = getNonFullStacks(state, getPlayersStacks(state.players), 4)
  while (stackIDs.length > 0) {
    var stackIndex = getRandomIndex(stackIDs.length)
    var stackID = stackIDs[stackIndex];
    ({cards, state} = moveRandomCard("stacks", stackID, cards, state));
    stackIDs = getNonFullStacks(state, getPlayersStacks(state.players), 4)
  } 
  while (cards.length > 0) {
    ({cards, state} = moveRandomCard("picks", "pick1", cards, state));
    ({cards, state} = moveRandomCard("picks", "pick2", cards, state));
  }
  state = revealTopCards(state)
  return state
}


// initialState.stacks["stack1"].push("card1")
// initialState.stacks["stack1"].push("card2")
// initialState.stacks["stack1"].push("card3")
// initialState.stacks["stack1"].push("card4")
// initialState.stacks["stack1"].push("card5")
let initialState = initStacksAndPicks(createInitialState())

export default createStore(reducers, initialState)
