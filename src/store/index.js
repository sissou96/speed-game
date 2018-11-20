import { createStore } from 'redux'
import reducers from '../reducers' 

const createStacks = () => {
  let stacks = {}
  let id = ""
  for (let i = 0; i < 12; i++) {
    id = "stack"+toString(i)
    stacks[id] = []
  }
  return stacks
}

const createPlayers = () => {
  return {
    "player1": {
      stacks: ["stack1", "stack2", "stack3", "stack4", "stack5"]
    },
    "player2": {
      stacks: ["stack8", "stack9", "stack10", "stack11", "stack12"]
    }
  }
}

const createBoard = () => {
  return {
    stacks: ["stack6", "stack7"],
    picks: ["pick1", "pick2"]
  }
}

const initialState = {
  cards: {
    "card1": {
      suit: 'S',
      value: 1
    }
  },
  stacks: createStacks(),
  players: createPlayers(),
  board: createBoard()
}

export default createStore(reducers, initialState)
