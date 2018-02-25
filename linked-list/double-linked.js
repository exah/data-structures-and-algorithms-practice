const SinglyLinkedList = require('./singly-linked')

class Node extends SinglyLinkedList.Node {
  constructor (data) {
    super(data)
    this.prev = null
  }
}

class DoubleLinkedList extends SinglyLinkedList {
  constructor () {
    super()
    this.tail = null
  }
  add (data) {
    const node = new Node(data)
    if (this.length === 0) {
      this.head = node
      this.tail = node
      return this.length++
    }

    this.tail.next = node
    node.prev = this.tail
    this.tail = node
    return this.length++
  }
  remove (index) {
    super._validateIndex(index)

    if (index === 0) {
      const nodeToDelete = this.head
      this.head = nodeToDelete.next
      if (this.head == null) {
        this.tail = null
      } else {
        this.head.prev = null
      }
      this.length--
      return nodeToDelete
    } else if (index === (this.length - 1)) {
      const tailNode = this.tail
      this.tail = tailNode.prev
      this.tail.next = null
      this.length--
      return tailNode
    }

    const nodeToDelete = super._getByIndex(index)
    const prevNode = nodeToDelete.prev
    prevNode.next = nodeToDelete.next
    prevNode.next.prev = prevNode

    this.length--
    return nodeToDelete
  }
}

module.exports = Object.assign(DoubleLinkedList, { Node })
