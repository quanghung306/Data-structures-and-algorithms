class Queue {
  constructor() {
    this.items = [];
  }

  // Thêm phần tử vào cuối hàng đợi
  enqueue(element) {
    this.items.push(element);
  }

  // Lấy phần tử khỏi đầu hàng đợi
  dequeue() {
    if (this.isEmpty()) {
      console.log("Hàng đợi rỗng");
      return;
    }
    return this.items.shift();
  }

  // Xem phần tử ở đầu hàng đợi
  front() {
    if (this.isEmpty()) {
      console.log("Hàng đợi rỗng");
      return;
    }
    return this.items[0];
  }

  // Kiểm tra hàng đợi có rỗng không
  isEmpty() {
    return this.items.length === 0;
  }

  // Số lượng phần tử trong hàng đợi
  size() {
    return this.items.length;
  }

  // In ra tất cả phần tử trong hàng đợi
  print() {
    console.log(this.items.join(" "));
  }
}
let queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(queue.front());
queue.dequeue();
queue.print();
