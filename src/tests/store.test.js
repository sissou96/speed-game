import * as store from '../../src/store'
import assert from 'assert'

describe('state creation functions', () => {
  describe('createCards', () => {
    it('should return 52 cards', () => {
      const cards = store.createCards()
      const actual = Object.keys(cards).length
      const expected = 52
      assert(actual === expected)
    })
  })
  describe('createStacks', () => {
    const stacks = store.createStacks()
    it('should create 12 stacks', () => {
      const actual = Object.keys(stacks).length
      const expected = 12
      assert(actual === expected)
    }) 
    it('should create empty stacks', () => {
      const values = Object.values(stacks)
      expect(values.every((stack) => stack.length === 0)).toBe(true)
    })
  })
  describe('createPlayers', () => {
    it('should create 2 players', () => {
      const players = store.createPlayers()
      const actual = Object.keys(players).length
      const expected = 2
      assert(actual === expected)
    })
  })
})

describe('state initialisation functions', () => {
  const state = store.createInitialState()
  const cards = Object.keys(state.cards)  
  describe('getPlayersStacks', () => {
    it('should return 10 stack ids', () => {
      const stacks = store.getPlayersStacks(state.players)
      expect(stacks.length).toBe(10)
    })
  })
  describe('getNonFullStacks', () => {
    it('sould return an empty array with a threshold of 0', () => {
      const stackIDs = store.getPlayersStacks(state.players)
      const actual = store.getNonFullStacks(state, stackIDs, 0)
      expect(actual).toEqual([])
    })
  })
  describe('getRandomIndex', () => {
    it('should return a random index', () => {
      const actual = store.getRandomIndex(cards.length)
      assert(actual >= 0 && actual < cards.length)
    })
  })
  describe('removeCard', () => {
    it('should return cards list with a card removed', () => {
      const actual = store.removeCard(0, cards)
      const expected = cards.slice(1)
      expect(actual).toEqual(expected)
    })
    it('should return cards entirely if given an out of bounds index', () => {
      const actual = store.removeCard(cards.length, cards)
      const expected = [...cards]
      expect(actual).toEqual(expected)
    })
  })
  describe('addCard', () => {
    it('should return the state with an card added to a stack', () => {
      const actual = store.addCard("stacks", "stack1", "card1", state)
      const expected = {...state}
      expected.stacks["stack1"] = ["card1"]
      expect(actual).toEqual(expected)
    })
  })
  describe('initStacksAndPicks', () => {
    const initiatedState = store.initStacksAndPicks(state)
    it('should "hydrate" players stacks with 4 cards each',() => {
      const playersStacksIDs = store.getPlayersStacks(initiatedState.players)
      const playersStacks = playersStacksIDs.map((stackID) => initiatedState.stacks[stackID])
      assert(playersStacks.every((stack) => stack.length === 4))
    })
    it('should "hydrate" picks with 6 cards each', () => {
      const picks = Object.values(initiatedState.picks)
      assert(picks.every((pick) => pick.length === 6))
    })
  })
})