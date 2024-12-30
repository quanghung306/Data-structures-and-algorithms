// Toán tử số học (Arithmetic Operators):
function Arithmetic(n) {
  let sum = 0;
  for (let i = 1; i <= n; i = i + 1) {
    sum = sum + i;
  }
  return sum;
}
let n = 10;
console.log("🚀 ~ Arithmetic ~ Arithmetic:", Arithmetic(n));

//Toán tử gán (Assignment Operators):
function Assignment(num) {
  let sum = 0;
  for (let i = 1; i <= n; i += 1) {
    sum += i;
  }
  return sum;
}
let num = 10;
console.log("🚀 ~ Assignment ~ Assignment:", Assignment(num));

//Toán tử so sánh (Comparison Operators):
function Comparison(a, b) {
  if (a === b) {
    // so sánh kiểu giá trị và dữ liệu
    return true;
  } else {
    return false;
  }
}
var a = 5;
var b = 5;
console.log("🚀 ~ Comparison ~ Comparison:", Comparison(a, b));
var a = 5;
var b = "5";
console.log("🚀 ~ Comparison ~ Comparison:", Comparison(a, b));
//Toán tử logic (Logical Operators):
function Logical(a,b) {
    if(a>=0 && b>=0){
        return true
    }else{
        return false
    }
}
var a=4,b=-4;
console.log("🚀 ~ Logical ~ Logical:", Logical(a,b))
//Toán tử điều kiện (Conditional Operator - Ternary):
function Conditional(Num) {
  return Num % 2 === 0 ? "Chẵn" : "Lẻ"; //toán tử ba ngôi
}

var Num = 4;
console.log("🚀~ Conditional ~ Conditional:", Conditional(Num));
var Num = 7;
console.log("🚀 ~ Conditional ~ Conditional:", Conditional(Num));
