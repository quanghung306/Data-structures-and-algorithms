//Tính giai thừa của một số 
function factorial(n) {
    if (n === 0) {
        return 1; // Điều kiện dừng
    }
    return n * factorial(n - 1); // Gọi đệ quy
}

console.log("🚀 ~ factorial ~ factorial:", factorial(10)) 
//Tính tổng các số từ 1 đến n
 function Sum(n) {
     if(n===0){
         return 0;
        }
        return Sum(n-1)+n
    }
    console.log("🚀 ~ Sum ~ Sum:", Sum(10));
//tinh luy thua 
function exponential(a,b) {
    if (b===0) {
        return 1;
    }
    return exponential(a,b-1)*a
}
console.log("🚀 ~ exponential ~ exponential:", exponential(2,20))
//tính tổng các số trong mảng
function SumT(arr) {
    if (arr.length ===0) {
        return 0;
    }
    return arr[0]+ SumT(arr.slice(1));// Tổng = phần tử đầu + tổng của phần còn lại
    
    
}
arr=[1,2,3,4,5]
console.log("🚀 ~ SumT ~ SumT:", SumT(arr))
//Tìm số lớn nhất trong mảng 
function Max(arr) {
    if (arr.length ===1 ) return arr[0];
        const max = Max(arr.slice(1));// Số lớn nhất của phần còn lại
        return Math.max(arr[0],max); // So sánh phần tử đầu tiên với max
    
    
}
console.log("🚀 ~ Max ~ Max:", Max([2,3,4,5,6]))
//Đảo ngược chuỗi
function reverseString(str) {
    if (str === "") return ""; // Điều kiện dừng: Chuỗi rỗng
    return str[str.length - 1] + reverseString(str.slice(0, -1)); // Lấy ký tự cuối + phần còn lại
}
console.log("🚀 ~ reverseString ~ reverseString:", reverseString("olleh"))

//kiểm tra số nguyên tố 
function isPrime(n, divisor = 2) {
    if (n < 2) return false; // Không phải số nguyên tố
    if (divisor > Math.sqrt(n)) return true; // Nếu không tìm thấy ước nào, là nguyên tố
    if (n % divisor === 0) return false; // Tìm thấy ước,không phải là nguyên tố
    return isPrime(n, divisor + 1); // Kiểm tra ước tiếp theo
}
console.log("🚀 ~ isPrime ~ isPrime:", isPrime(11))
