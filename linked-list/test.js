import test from 'ava'
import SinglyLinkedList from './singly-linked'
import DoubleLinkedList from './double-linked'

const john = 'John'
const james = 'James'
const bob = 'Bob'
const harry = 'Harry'
const ron = 'Ron'

const basicListTest = (list, t) => {
  // Basic operations
  t.is(list.length, 0)
  list.add(john)
  list.add(james)
  list.add(bob)
  list.add(harry)
  list.add(ron)
  t.is(list.length, 5)
  t.is(list.get(0).data, john)
  t.is(list.get(0).next.data, james)
  t.is(list.get(2).data, bob)
  const removed = list.remove(1)
  t.is(removed.data, james)
  t.is(list.get(1).data, bob)
  t.is(list.length, 4)

  // Get wrong index
  t.throws(() => list.get(4))
  t.throws(() => list.remove(4))

  // Remove first
  list.remove(0)
  // Remove last
  list.remove(list.length - 1)
}

test('Singly linked list', (t) => {
  const list = new SinglyLinkedList()
  basicListTest(list, t)
})

test('Double linked list', (t) => {
  const list = new DoubleLinkedList()
  basicListTest(list, t)

  t.is(list.head.prev, null)
  t.is(list.tail.next, null)
  let count = 0
  let node = list.head
  while (count < (list.length - 1)) {
    t.is(node.next.prev, node)
    node = node.next
    count++
  }
  t.is(list.tail, node)
  const prevTail = list.tail.prev
  list.remove(list.length - 1)
  t.is(list.tail, prevTail)
})
