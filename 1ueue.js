class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(e) {
    this.items.push(e);
  }

  dequeue() {
    return this.isEmpty() ? "Queue is empty." : this.items.shift();
  }

  peek() {
    return this.isEmpty() ? "Queue is empty." : this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  print() {
    console.log(this.items.join(" -> "));
  }
}

const queue = new Queue();
for (let i = 0; i < 5; i++) {
  let random = Math.floor(Math.random() * 10);
  queue.enqueue(random);
}

console.log(queue);
queue.print();
console.log(queue.dequeue());
console.log("After Dequeue:", queue);
console.log(queue.peek());
console.log(queue.size());
