//Tính giai thừa của một số 
function factorial(n) {
    if (n === 0) {
        return 1; // Điều kiện dừng
    }
    return n * factorial(n - 1); // Gọi đệ quy
}

console.log("🚀 ~ factorial ~ factorial:", factorial(10)) 
//Tính tổng các số từ 1 đến 
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
