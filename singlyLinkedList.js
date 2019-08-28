// piece of data - val
// reference to next node - next

class Node{
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;  
  }
  // add new node to end of linked list
  push(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this; // return the linked list
  }
  // pop - remove a node from the end of the linked list
  pop() {
    if (!this.head) {
      return console.log(undefined);
    }
    var current = this.head;   
    var newTail = new Node(null); 
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
    return console.log(current);
  }
  // Shift - removes the first element in the list
  shift() {
    if (!this.head) return undefined;
    var currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {      
      this.tail = null;
    }
    return console.log(currentHead);
  }
  // Unshift - insert new node to head of list
  unshift(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this; 
  }
  // Get - retrieve a node at the given position
  get(index) {
    if (index < 0 || index >= this.length) return null;
    var currentIndex = 0;
    var currentNode = this.head;
    while (currentIndex < index) {
      currentNode = currentNode.next;
      currentIndex++;
    }
    //console.log(currentNode.val);
    return currentNode;
  }
  // Set - given an index and a value, find the specific node.  If the node doesn't exist, return false.  If the node is found, set the value of the node to be the value passed to the function and return true.
  set(val, index) {
    var currentNode = this.get(index);
    if (currentNode) {
      currentNode.val = val;
      console.log(true);
      return true;
    }
    console.log(false);
    return false;
  }
  // insert - if index is less than zero or greather than the length, return false. if the index is the same as length, push a new node to the end of the list.  if the index is 0, unshift a new node to the start of the list.  Otherwise, using the get method, access the node at the index -1.
  insert(val, index) {
    if (index < 0 || index > this.length) {
      console.log(false);
      return false;
    } 
    if (index === this.length) {
      return !!this.push(val);
    }
    if (index === 0) {
      return !!this.unshift(val);
    }
    var newNode = new Node(val);
    var currentNode = this.get(index - 1);
    var nextNode = currentNode.next;
    currentNode.next = newNode;
    newNode.next = nextNode;
    console.log(true);
    this.length++;
    return true;
  }
  print() {
    var arr = [];
    var current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }
  // Reverse
  reverse() {
    // swap head for tail
    var node = this.head;
    this.head = this.tail;
    this.tail = node;
    var next;
    var prev = null;
    while (node) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;     
    }
    return this;
  }
}


var list = new SinglyLinkedList();
list.push('Hi');
list.push('You');
list.push('Too');
//list.get(1);
list.set(100, 0);
list.set(200, 1);
list.set(300, 2);
list.insert(150, 1);
list.insert(400, 3);
list.insert('one', 0);
list.insert(155, 2);
list.print();
list.reverse();
list.print();