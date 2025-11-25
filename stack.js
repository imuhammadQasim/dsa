// A stack is a linear data structure that allows operations to be performed at one end, called the top. The two primary operations are:
// 1. Push                2. Pop
// Last in first out LIFO

class Stack {
  constructor() {
    this.items = [];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  push(e) {
    this.items.push(e);
  }

  pop() {
    if (this.isEmpty) {
      return "Stack is empty";
    } else {
      return this.items.pop;
    }
  }

  peek() {
    if (this.isEmpty) {
      return "Stack is empty";
    } else {
      return this.items[this.items.length - 1];
    }
  }
}

const stack = new Stack();

stack.push("Bilal");
console.log(stack);
console.log(stack.isEmpty());
console.log(stack.peek());
