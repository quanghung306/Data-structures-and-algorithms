// Hàm hoán đổi giá trị giữa hai vị trí trong mảng
function swap(arr, a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

// Đối tượng để so sánh giá trị
const Compare = {
    LESS_THAN: -1,
    BIGGER_THAN: 1,
    EQUAL: 0
};

// Hàm so sánh giá trị
function defaultCompare(a, b) {
    if (a === b) {
        return Compare.EQUAL;
    }
    return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}

// Hàm Selection Sort
function selectionSort(arr, compare = defaultCompare) {
    const { length } = arr;

    for (let i = 0; i < length - 1; i++) {
        // Giả sử phần tử nhỏ nhất là phần tử tại vị trí i
        let minIndex = i;
        // Tìm phần tử nhỏ nhất trong mảng chưa được sắp xếp
        for (let j = i + 1; j < length; j++) {
            if (compare(arr[j], arr[minIndex]) === Compare.LESS_THAN) {
                minIndex = j;
            }
        }
        // Nếu minIndex không phải là vị trí hiện tại, hoán đổi chúng
        if (minIndex !== i) {
            swap(arr, i, minIndex);
        }
    }

    return arr;
}

// Ví dụ sử dụng
let array = [64, 25, 12, 22, 11];
console.log("Mảng trước khi sắp xếp:", array);
selectionSort(array);
console.log("Mảng sau khi sắp xếp:", array);
// Output:
// Mảng trước khi sắp xếp: [64, 25, 12, 22, 11]
// Mảng sau khi sắp xếp: [11, 12, 22, 25, 64]
