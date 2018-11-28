import * as rules from '../Rules'
import { createInitialState } from '../store'
import assert from 'assert'

describe("Rules", () => {
  const state = createInitialState()
  describe("playerStacksAreEmpty", () => {
    it('should return true is stacks of a player are empty', () => {
      assert(rules.playerStacksAreEmpty("player1", state))
    })
  })
  describe("hasAPlayerWon", () => {
    it('should return true is stacks of a player are empty', () => {
      assert(rules.hasAPlayerWon(state))
    })
  })
})