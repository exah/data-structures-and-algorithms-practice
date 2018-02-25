const stacksFactory = () => {
  let state = []
  let length = 0

  const methods = {
    push (val) {
      state = [ ...state, val ]
      length++
      return length
    },
    pop () {
      const [ last ] = state.slice(-1)
      state = state.slice(0, -1)
      length--
      return last
    },
    get length () {
      return length
    },
    isEmpty: () => length === 0,
    get: () => state.slice()
  }

  return methods
}

module.exports = stacksFactory
