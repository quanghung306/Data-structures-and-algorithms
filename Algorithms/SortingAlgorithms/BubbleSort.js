//Hàm hoán đổi giá trị giữa hai vị trí trong mảng
function swap(arr, a, b) {
    let temp = arr[a];  // Lưu giá trị của phần tử tại vị trí `a`
    arr[a] = arr[b];    // Gán giá trị tại vị trí `b` vào `a`
    arr[b] = temp;      // Gán giá trị lưu tạm vào vị trí `b`
}
// Đối tượng để so sánh giá trị
const Compare = {
    LESS_THAN: -1,
    BIGGER_THAN: 1
};
//Hàm để so sánh giá trị
function defaultCompare(a, b) {
    if (a === b) {
        return 0;// Hai giá trị bằng nhau
    }
    return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}
function bubbleSort(arr, compare = defaultCompare) {
    const { length } = arr; // Lấy độ dài của mảng
    for (let i = 0; i < length; i++) { // Lặp qua các phần tử
        for (let j = 0; j < length - 1 - i; j++) { // So sánh từng cặp liền kề
            if (compare(arr[j], arr[j + 1]) === Compare.BIGGER_THAN) { 
                swap(arr, j, j + 1); // Hoán đổi nếu phần tử trước lớn hơn phần tử sau
            }
        }
    }
    return arr; // Trả về mảng đã sắp xếp
}
console.log(bubbleSort([4,6,2,3,1,9,8]));
