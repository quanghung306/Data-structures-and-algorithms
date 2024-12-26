//Cấu trúc của một node
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
//Danh sách liên kết đơn (Singly Linked List)
class LinkedList {
  constructor() {
    this.head = null; // Điểm bắt đầu của danh sách
    this.size = 0; // Kích thước của danh sách
  }

  // Thêm phần tử vào cuối danh sách
  append(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode; // Nếu danh sách rỗng, node đầu tiên là head
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next; // Di chuyển đến node cuối
      }
      current.next = newNode; // Thêm node mới vào cuối
    }
    this.size++;
  }

  // Chèn phần tử vào vị trí chỉ định
  insertAt(data, index) {
    if (index < 0 || index > this.size) {
      console.log("Index không hợp lệ");
      return;
    }
    const newNode = new Node(data);
    if (index === 0) {
      newNode.next = this.head; // Chèn vào đầu danh sách
      this.head = newNode;
    } else {
      let current = this.head;
      let prev = null;
      let i = 0;
      while (i < index) {
        prev = current;
        current = current.next;
        i++;
      }
      newNode.next = current;
      prev.next = newNode;
    }
    this.size++;
  }

  // Xóa phần tử tại vị trí chỉ định
  removeAt(index) {
    if (index < 0 || index >= this.size) {
      console.log("Index không hợp lệ");
      return;
    }
    let current = this.head;
    if (index === 0) {
      this.head = current.next; // Xóa phần tử đầu tiên
    } else {
      let prev = null;
      let i = 0;
      while (i < index) {
        prev = current;
        current = current.next;
        i++;
      }
      prev.next = current.next; // Bỏ qua phần tử tại index
    }
    this.size--;
  }

  // In các phần tử trong danh sách
  print() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}
const list = new LinkedList();

list.append(10);
list.append(20);
list.append(30);

console.log("Danh sách sau khi thêm:");
list.print();

list.insertAt(15, 1);
console.log("Danh sách sau khi chèn:");
list.print();

list.removeAt(2);
console.log("Danh sách sau khi xóa:");
list.print();
//Danh sách liên kết đôi (Doubly Linked List)
class DoublyNode {
  constructor(data) {
    this.data = data;
    this.next = null; // Tham chiếu đến node sau
    this.prev = null; // Tham chiếu đến node trước
  }
}
class DoublyLinkedList {
  constructor() {
    this.head = null; // Điểm bắt đầu của danh sách
    this.tail = null; // Điểm kết thúc của danh sách
    this.size = 0; // Số lượng node
  }

  // Thêm phần tử vào cuối danh sách
  append(data) {
    const newNode = new DoublyNode(data);
    if (!this.head) {
      this.head = newNode; // Nếu danh sách rỗng, node đầu tiên là head và tail
      this.tail = newNode;
    } else {
      this.tail.next = newNode; // Tail hiện tại trỏ đến node mới
      newNode.prev = this.tail; // Node mới trỏ ngược lại tail hiện tại
      this.tail = newNode; // Cập nhật tail mới
    }
    this.size++;
  }

  // Thêm phần tử vào đầu danh sách
  prepend(data) {
    const newNode = new DoublyNode(data);
    if (!this.head) {
      this.head = newNode; // Nếu danh sách rỗng, node đầu tiên là head và tail
      this.tail = newNode;
    } else {
      newNode.next = this.head; // Node mới trỏ đến head hiện tại
      this.head.prev = newNode; // Head hiện tại trỏ ngược lại node mới
      this.head = newNode; // Cập nhật head mới
    }
    this.size++;
  }

  // Xóa phần tử tại vị trí chỉ định
  removeAt(index) {
    if (index < 0 || index >= this.size) {
      console.log("Index không hợp lệ");
      return;
    }
    let current = this.head;

    if (index === 0) {
      // Xóa phần tử đầu tiên
      if (this.size === 1) {
        this.head = null; // Nếu chỉ có một phần tử
        this.tail = null;
      } else {
        this.head = this.head.next; // Cập nhật head
        this.head.prev = null; // Xóa tham chiếu ngược
      }
    } else if (index === this.size - 1) {
      // Xóa phần tử cuối
      current = this.tail;
      this.tail = this.tail.prev; // Cập nhật tail
      this.tail.next = null; // Xóa tham chiếu tới node cuối
    } else {
      let i = 0;
      while (i < index) {
        current = current.next; // Duyệt đến vị trí cần xóa
        i++;
      }
      current.prev.next = current.next; // Node trước đó trỏ đến node sau
      current.next.prev = current.prev; // Node sau trỏ ngược đến node trước
    }
    this.size--;
  }

  // Duyệt danh sách từ đầu đến cuối
  printForward() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }

  // Duyệt danh sách từ cuối lên đầu
  printBackward() {
    let current = this.tail;
    while (current) {
      console.log(current.data);
      current = current.prev;
    }
  }
}
const List = new DoublyLinkedList();
console.log("Danh sách liên kết đôi");

List.append(10);
List.append(20);
List.prepend(5);

console.log("Danh sách từ đầu đến cuối:");
List.printForward();

console.log("Danh sách từ cuối lên đầu:");
List.printBackward();
List.removeAt(1);

console.log("Danh sách sau khi xóa:");
List.printForward();
