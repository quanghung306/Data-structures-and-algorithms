function insertionSort(arr) {
    const { length } = arr;
    for (let i = 1; i < length; i++) {
        let current = arr[i]; // Lưu giá trị hiện tại
        let j = i - 1;
        // Dịch chuyển các phần tử lớn hơn `current` sang bên phải
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }
        // Chèn `current` vào vị trí đúng
        arr[j + 1] = current;
    }
    return arr; // Trả về mảng đã sắp xếp
}
let array = [8, 5, 2, 9, 5, 6, 3];

console.log("🚀 ~ insertionSort ~ insertionSort:", insertionSort)

