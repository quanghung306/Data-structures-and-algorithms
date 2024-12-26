// //Hàm  swap giá trị
// function swap(arr, a, b) {
//     let temp = arr[a];  // Lưu giá trị của phần tử tại vị trí `a`
//     arr[a] = arr[b];    // Gán giá trị tại vị trí `b` vào `a`
//     arr[b] = temp;      // Gán giá trị lưu tạm vào vị trí `b`
// }
// const Compare = {
//     LESS_THAN: -1,
//     BIGGER_THAN: 1
// };
// //Hàm để so sánh giá trị
// function defaultCompare(a, b) {
//     if (a === b) {
//         return 0;// Hai giá trị bằng nhau
//     }
//     return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
// }
// // hàm chính để thực hiện sắp xếp nhanh
// function quickSort(arr, compare = defaultCompare) {
//     return quick(arr, 0, arr.length - 1, compare);
// }
// //thực hiện việc chia nhỏ mảng để áp dụng thuật toán sắp xếp nhanh
// function quick(arr, left, right, compare) {
//     let i;
//     if (arr.length > 1) {
//         i = partition(arr, left, right, compare); // Tìm vị trí phân vùng
//         if (left < i - 1) {
//             quick(arr, left, i - 1, compare); // Đệ quy bên trái pivot
//         }
//         if (i < right) {
//             quick(arr, i, right, compare); // Đệ quy bên phải pivot
//         }
//     }
//     return arr;
// }
// //phân vùng mảng dựa trên một giá trị chốt (pivot)
// function partition(arr, left, right, compare) {
//     const pivot = arr[Math.floor((left + right) / 2)]; // Chọn pivot (giữa mảng)
//     let i = left;  // Chỉ số bên trái
//     let j = right; // Chỉ số bên phải

//     while (i <= j) {
//         while (compare(arr[i], pivot) === Compare.LESS_THAN) {
//             i++; // Tìm phần tử lớn hơn hoặc bằng pivot
//         }
//         while (compare(arr[j], pivot) === Compare.BIGGER_THAN) {
//             j--; // Tìm phần tử nhỏ hơn hoặc bằng pivot
//         }
//         if (i <= j) {
//             swap(arr, i, j); // Hoán đổi phần tử không đúng vị trí
//             i++;
//             j--;
//         }
//     }
//     return i; // Trả về vị trí phân vùng
// }
// console.log("🚀 ~ quickSort ~ quickSort:", quickSort([3,4,2,5,6,8,10]))
// sự dụng để quy để giải hàm quick sort
function quickSort(arr) {
    if (arr.length<2) {
        return arr
    }
    let pivot = arr[arr.length - 1];
    let right = [];
    let left = [];
    for (let index = 0; index < arr.length; index++) {
        //nếu nhỏ hơn pivot thì đẩy qua bên trái
        if (arr[index] < pivot) {
            left.push(arr[index]);
        }
        // nếu lớn hơn pivot thì đẩy qua bên phải
        if (arr[index] > pivot) {
            right.push(arr[index]);
        }
        
    }
    // sự dụng đệ quy để sắp xếp mảng left(đã sắp xếp) thêm pivot vào giữa và mảng right (đã sắp xếp)
    return [...quickSort(left),pivot,...quickSort(right)]
}
const arr = [2,3,4,12,3,5,23]
console.log("🚀 ~ quickSort ~ quickSort:", quickSort(arr))

