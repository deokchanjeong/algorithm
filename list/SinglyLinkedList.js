class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  find(data) {
    let currentNode = this.head;

    while (currentNode.data !== data) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  remove(data) {
    if (this.isEmpty()) {
      return;
    }

    let currentNode = this.head;

    if (currentNode.data === data) {
      this.head = currentNode.next;
    } else {
      while (currentNode) {
        if (currentNode.next.data === data) {
          break;
        }
        currentNode = currentNode.next;
      }
      currentNode.next = currentNode.next.next;
    }

    this.size -= 1;
  }

  append(data) {
    const newNode = new Node(data);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size += 1;
  }

  insert(node, data) {
    const newNode = new Node(data);
    newNode.next = node.next;
    node.next = newNode;
    this.size += 1;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  toString() {
    const arr = [];
    let currentNode = this.head;

    while (currentNode) {
      arr.push(currentNode.data);
      currentNode = currentNode.next;
    }
    console.log(arr);
  }
}
