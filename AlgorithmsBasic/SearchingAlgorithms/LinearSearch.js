function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        return i; // Trả về chỉ số của phần tử tìm thấy
      }
    }
    return -1; // Không tìm thấy phần tử
  }
  
  console.log(linearSearch([5, 3, 8, 4, 2], 8)); 
  console.log(linearSearch([5, 3, 8, 4, 2], 7)); 
  