//Để sử dụng thuật toán tìm kiếm nhị phân, mảng phải được sắp xếp.
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      
      if (arr[mid] === target) {
        return mid; // Trả về chỉ số của phần tử tìm thấy
      }
      
      if (arr[mid] < target) {
        left = mid + 1; // Tìm kiếm trong nửa bên phải
      } else {
        right = mid - 1; // Tìm kiếm trong nửa bên trái
      }
    }
    return -1; // Không tìm thấy phần tử
  }
  
  console.log(binarySearch([2, 3, 4, 5, 8], 8)); 
  console.log(binarySearch([2, 3, 4, 5, 8], 7)); 
  