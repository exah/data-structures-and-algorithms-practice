import test from 'ava'
import queueFactory from './index'

const john = 'John'
const james = 'James'
const bob = 'Bob'

test('queue should me empty', (t) => {
  const queue = queueFactory()
  t.true(queue.isEmpty())
})

test('queue should contain 3 persons, John in front, Bob in back', (t) => {
  const queue = queueFactory()
  queue.enqueue(john)
  queue.enqueue(james)
  queue.enqueue(bob)
  t.is(queue.length, 3)
  t.deepEqual(queue.get(), [ john, james, bob ])
  t.is(queue.front(), john)
  t.is(queue.back(), bob)
})

test('queue should dequeue first person (John)', (t) => {
  const queue = queueFactory()
  queue.enqueue(john)
  queue.enqueue(james)
  queue.enqueue(bob)
  t.is(queue.front(), john)
  const first = queue.dequeue()
  t.is(first, john)
  t.is(queue.length, 2)
})
