//Tính số Fibonacci thứ n, với công thức
//tính chất con f(n)=f(n−1)+f(n−2)
//Giải pháp Memoization (Top-Down)
function fib(n, memo = {}) {
    if (n <= 1) return n; //điều kiện cơ sở
    if (memo[n]) return memo[n]; // Nếu đã tính, trả về giá trị lưu trữ
    memo[n] = fib(n - 1, memo) + fib(n - 2, memo); // Tính toán và lưu kết quả
    return memo[n];
    
}
console.log("🚀 ~ fib ~ fib:", fib(10))
// giải pháp Tabulation (Bottom-Up Approach)
//điều kiện cơ sở f(0)=0,f(1)=1
function Fib(n) {
    if (n <= 1) return n;
     const dp = [0, 1]; // Khởi tạo bảng lưu trữ
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2]; // Công thức tính Fibonacci
    }
    return dp[n];
}
console.log("🚀 ~ Fib ~ Fib:", Fib(10))
//Tìm tổng lớn nhất của một dãy con liên tiếp trong mảng.
//Tính chất con: Nếu bao gồm phần tử ar[i]: dp[i]=max(arr[i],dp[i-1]+arr[i])
//Điều kiện cơ sở:dp[0]=arr[0]
function maxSum(arr) {
    let maxSum = arr[0];
    let currentSum = arr[0];
    for (let i = 1; i < arr.length; i++) {
        currentSum = Math.max(arr[i], currentSum + arr[i]); // Tính tổng lớn nhất tại i
        maxSum = Math.max(maxSum, currentSum); // Cập nhật tổng lớn nhất
    }
    return maxSum;
}
console.log("🚀 ~ maxSum ~ maxSum:", maxSum([1,2,3,4,2,3,4,5,6,3]))
// Tính số cách sắp xếp n cái ghế
//tính chât con dp[n]=n*dp[n−1]
// Điều kiện cơ sở dp[0]=1
function ChairArrangement(n) {
    if (n < 0) return 0;// Không có cách sắp xếp khi n âm
    const dp = [1];  // Điều kiện cơ sở 
    for (let i = 1; i <= n; i++) {
        dp[i] = i * dp[i - 1]; // Công thức tính số cách sắp xếp
    }
    return dp[n]; // Trả về số cách sắp xếp n cái ghế
}
console.log("🚀 ~ CountChairs~CountChairs:", ChairArrangement(5))
 
