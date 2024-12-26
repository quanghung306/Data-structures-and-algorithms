const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1,
};
//Hàm để so sánh giá trị
function defaultCompare(a, b) {
  if (a === b) {
    return 0; // Hai giá trị bằng nhau
  }
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}
function mergeSort(arr, compare = defaultCompare) {
  if (arr.length > 1) {
    // Điều kiện dừng (mảng có 1 phần tử thì mặc định đã sắp xếp)
    const { length } = arr;
    const middle = Math.floor(length / 2); // Tìm chỉ số giữa mảng
    const left = mergeSort(arr.slice(0, middle), compare); // Gọi đệ quy để sắp xếp nửa trái
    const right = mergeSort(arr.slice(middle, length), compare); // Gọi đệ quy để sắp xếp nửa phải
    arr = merge(left, right, compare); // Hợp nhất hai mảng con đã sắp xếp
  }
  return arr; // Trả về mảng đã sắp xếp
}
function merge(left, right, compare) {
  let i = 0;
  let j = 0;
  const result = []; // Mảng kết quả

  while (i < left.length && j < right.length) {
    // So sánh phần tử đầu tiên của mỗi mảng
    result.push(
      compare(left[i], right[j]) === Compare.LESS_THAN ? left[i++] : right[j++]
    );
  } 
  // Thêm các phần tử còn lại từ mảng `left` hoặc `right`
  return result.concat(i < left.length ? left.slice(i) : right.slice(j));
}

console.log(
  "🚀 ~ mergeSort ~ mergeSort:",
  mergeSort([3, 1, 9, 7, 5, 4, 2, 8, 0, 6])
);
