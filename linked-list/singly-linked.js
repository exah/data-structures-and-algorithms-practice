function Node (data) {
  this.data = data
  this.next = null
}

class SinglyLinkedList {
  constructor () {
    this.length = 0
    this.head = null
  }
  _validateIndex (index) {
    if (index < 0 || this.length === 0 || index >= this.length) {
      throw new Error('Wrong index or empty list')
    }
  }
  _getByIndex (index = 0) {
    let currentNode = this.head
    let position = 0
    while (position < index) {
      currentNode = currentNode.next
      position++
    }

    return currentNode
  }
  get (index = 0) {
    this._validateIndex(index)
    return this._getByIndex(index)
  }
  add (data) {
    const node = new Node(data)
    if (this.length === 0) {
      this.head = node
      return this.length++
    }

    let currentNode = this.head
    while (currentNode.next) {
      currentNode = currentNode.next
    }
    currentNode.next = node
    return this.length++
  }
  remove (index) {
    this._validateIndex(index)
    let currentNode = this.head
    if (index === 0) {
      this.head = currentNode.next
      this.length--
      return currentNode
    }

    let position = 0
    let prevNode = null
    while (position < index) {
      prevNode = currentNode
      currentNode = currentNode.next
      position++
    }

    prevNode.next = currentNode.next
    this.length--
    return currentNode
  }
}

module.exports = Object.assign(SinglyLinkedList, { Node })
