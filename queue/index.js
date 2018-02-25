const queueFactory = () => {
  let state = []
  let length = 0

  const methods = {
    enqueue (data) {
      state = [ ...state, data ]
      length++
      return length
    },
    dequeue () {
      const [ front, ...nextState ] = state
      state = nextState
      length--
      return front
    },
    get length () {
      return length
    },
    front: () => state[0],
    back: () => state[length - 1],
    isEmpty: () => length === 0,
    get: () => state.slice()
  }

  return methods
}

module.exports = queueFactory
