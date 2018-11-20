const moveCard = (sourceStack, targetStack, state) => {
  let sourceCard = state.stacks[sourceStack][0]
  let newSourceStack = {}
  newSourceStack[sourceStack] = state.stacks[sourceStack].slice(1)

  let newTargetStack = {}
  newTargetStack[targetStack] = [
    sourceCard,
    ...state.stacks[targetStack]
  ]

  let newStacks = {
    ...state.stacks, 
    newSourceStack,
    newTargetStack
  }
  return  {...state, newStacks}
}

const reducer = (state, action) => {
  switch(action.type) {
    case 'MOVE_CARD':
      return moveCard(action.source, action.target)
    default:
      return state
  }
}

export default reducer