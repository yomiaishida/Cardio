// Singly Linked List
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  //   Push Method
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
      this.length += 1;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
      this.length += 1;
    }
    return this;
  }
  //   Pop Method
  pop() {
    var current = this.head;
    var newTail = current;
    if (!current) return undefined;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  //   Shift Method
  shift() {
    if (this.length === 0) return undefined;
    var shiftedVal = this.head;
    this.head = this.head.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return shiftedVal;
  }
  //   Unshift Method
  unshift(val) {
    var newNode = new Node(val);
    var tempHead = this.head;
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.head = newNode;
      this.head.next = tempHead;
    }
    this.length += 1;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;
    var counter = 0;
    var current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }
  set(index, val) {
    var getInd = this.get(index);
    if (getInd) {
      getInd.val = val;
      return true;
    }
    return false;
  }
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);

    var newNode = new Node(val);
    var prevInd = this.get(index - 1);
    var nextInd = this.get(index);
    prevInd.next = newNode;
    newNode.next = nextInd;
    this.length++;
    return true;
  }
}
