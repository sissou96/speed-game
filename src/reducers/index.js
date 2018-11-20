const moveCard = (sourceStack, targetStack, state) => {
  let sourceCard = state.stacks[sourceStack][0]
  let targetCard = state.stacks[targetStack][0]
  // let sourceIndex = 
  return {
    ...state, 
    stacks: {
      ...state.stacks,
      state.stacks[targetStack] : [
        sourceCard,
        ...state.stacks[targetStack]
      ],
      state.stacks[sourceStack] : 
        state.stacks[sourceStack].slice(1)
    }
  }
}

const reducer = (state, action) => {
  switch(action.type) {
    case 'MOVE_CARD': 
  }
}
