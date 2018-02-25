import test from 'ava'
import stacksFactory from './index'

test('historyStack should me empty', (t) => {
  const historyStack = stacksFactory()
  t.true(historyStack.isEmpty())
})

test('historyStack should contain 2 items', (t) => {
  const historyStack = stacksFactory()
  historyStack.push('http://google.com')
  historyStack.push('http://example.com')
  t.is(historyStack.length, 2)
  t.deepEqual(historyStack.get(), [ 'http://google.com', 'http://example.com' ])
})

test('historyStack should pop last item and contain one, add last item to forwardStack', (t) => {
  const historyStack = stacksFactory()
  const forwardStack = stacksFactory()
  historyStack.push('http://google.com')
  historyStack.push('http://example.com')
  forwardStack.push(historyStack.pop())
  t.is(historyStack.length, 1)
  t.is(forwardStack.length, 1)
  t.deepEqual(forwardStack.get(), [ 'http://example.com' ])
})
