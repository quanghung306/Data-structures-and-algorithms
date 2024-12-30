// Toán tử số học (Arithmetic Operators):
let a=5;let b=6;
console.log("Toán tử số học",a + b);
console.log("Toán tử số học",a - b);
console.log("Toán tử số học",a % b);
console.log("Toán tử số học",a * b);
//Toán tử gán (Assignment Operators):
let x = 5;
x += 9;// tương tự như -=,*=,/=
console.log("Toán tử gán",x);
//Toán tử so sánh (Comparison Operators):
console.log("Toán tử so sánh",5 == "5");  //so sánh kiểu giá trị 
console.log("Toán tử so sánh",5 === "5"); // so sánh kiểu giá trị và dữ liệu
//Toán tử logic (Logical Operators):
let c = 5;
console.log("Toán tử logic(AND) :" , c > 0 && c < 10);//Và (AND) Đúng nếu cả hai điều kiện đúng.
console.log("Toán tử logic(OR) :", c > 0 || c < 10); // Hoặc (OR) Đúng nếu ít nhất một điều kiện đúng
console.log("Toán tử logic(NOT) :", !(c>10)); //Phủ định (NOT) Đảo ngược giá trị logic.

//Toán tử điều kiện (Conditional Operator - Ternary):
let age = 12;
let status = (age >= 18) ? "Adult" : "Minor";// toán tử ba ngôi
console.log("Toán tử điều kiện: ",status); 
