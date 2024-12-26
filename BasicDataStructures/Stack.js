class Stack {
  constructor() {
    this.items = [];
  }

  // Thêm phần tử vào ngăn xếp
  push(element) {
    this.items.push(element);
  }

  // Lấy phần tử cuối ra khỏi ngăn xếp
  pop() {
    if (this.isEmpty()) {
      console.log("Ngăn xếp rỗng");
      return;
    }
    return this.items.pop();
  }

  // Xem phần tử ở đỉnh ngăn xếp
  peek() {
    if (this.isEmpty()) {
      console.log("Ngăn xếp rỗng");
      return;
    }
    return this.items[this.items.length - 1];
  }

  // Kiểm tra ngăn xếp có rỗng không
  isEmpty() {
    return this.items.length === 0;
  }

  // Số lượng phần tử trong ngăn xếp
  size() {
    return this.items.length;
  }

  // In ra tất cả phần tử trong ngăn xếp
  print() {
    console.log(this.items.join(" "));
  }
}
let stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.peek());
stack.pop();
stack.print();
