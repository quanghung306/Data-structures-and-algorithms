//Khai báo bằng cách dùng dấu ngoặc vuông []:
var arr = [1, 2, 3, 4]; // Mảng số
var mixedArr = ["Box", "hello", "Cherry"]; // Mảng chuỗi
//Khai báo bằng từ khóa Array:
var arR = new Array(5); // Mảng rỗng có 5 phần tử
var arr = new Array(1, 2, 3, 4); // Mảng có các phần tử 1, 2, 3, 4
//Truy cập phần tử
console.log(arr[0]);
console.log(arr[arr.length - 1]);
//Thêm và xóa phần tử

arr.unshift(0); //thêm vào đầu phần tử
console.log(arr);

arr.push(5); // thêm vào cuối phần tử
console.log(arr);

arr.shift(); // xóa phần tử đầu
console.log(arr);

arr.pop(); //xóa phần tử cuối
console.log(arr);

//Các phương thức xử lý mảng (Array)
//Duyệt qua mảng
var arr = [3, 4, 5, 6];
arr.forEach((value, index) => {
  console.log(`Index: ${index}, Value: ${value}`);
});
//Sao chép mảng
var arr = [1, 2, 3];
let copy = arr.slice(1);
console.log("🚀 ~ copy:", copy);
//Sắp xếp mảng
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruitSort = fruits.sort();
console.log("🚀 ~ fruit:", fruitSort);
// Với số lớn bé (cần hàm so sánh):
var arr = [10, 14, 3, 9];
let sort = arr.sort((a, b) => a - b);
console.log("🚀 ~ sort:", sort);
//Lọc phần tử:
var arr = [1, 2, 3, 4, 5];
let even = arr.filter((num) => num % 2 === 1); //Lọc ra số lẽ
console.log("🚀 ~ even:", even);
//Tìm phần tử đầu tiên khớp điều kiện
var arr = [4, 5, 6, 8, 3];
let found = arr.find((num) => num > 6);
console.log("🚀 ~ found:", found);
//Tìm chỉ số phần tử đầu tiên khớp điều kiện
var arr = [1, 3, 4, 2, 9];
let index = arr.findIndex((num) => num > 4);
console.log("🚀 ~ index:", index);
//Thêm/Xóa phần tử tại vị trí bất kỳ (splice):
const fruit = ["Banana", "Orange", "Apple", "Mango"];
// tại vị trị thứ 2 xóa 1 phần tử thêm lemon và kiwi
fruits.splice(2, 1, "Lemon", "Kiwi");
//Biến đổi mảng (map)
var arr = [1, 2, 3];
let doubled = arr.map((num) => num * 2);
console.log("🚀 ~ doubled:", doubled);
//Tính tổng giá trị (reduce)
var arr = [1, 2, 3];
let sum = arr.reduce((a, b) => a + b);
console.log("🚀 ~ sum:", sum);
//Kiểm tra điều kiện (every và some)
//Tất cả các phần tử phải thỏa mãn điều kiện:
let allEven = arr.every((num) => num % 2 === 0);
console.log("🚀 ~ allEven:", allEven);
//Ít nhất một phần tử thỏa mãn điều kiện
let hasEven = arr.some((num) => num % 2 === 0);
console.log("🚀 ~ hasEven:", hasEven);
//Nối mảng (concat)
let arr1 = [1, 2];
let arr2 = [3, 4];
let combined = arr1.concat(arr2);
console.log("🚀 ~ combined:", combined);
//Tìm chỉ số phần tử (indexOf và includes)
var arr = [10, 20, 30];
console.log(arr.indexOf(20)); //tìm vị trí (chỉ số) đầu tiên của một phần tử trong mảng. Nếu phần tử không tồn tại, trả về -1.
console.log(arr.includes(40)); // tìm kiếm xem phần tử có tồn tại trong mạng không
//Tạo chuỗi từ mảng (join)
var arr = ["Hello", "world"];
let sentence = arr.join(" ");
console.log("🚀 ~ sentence:", sentence);
// tra ve gia tri lon nhat
let Max= Math.max(6,2)
console.log("🚀 ~ Max:", Max)
