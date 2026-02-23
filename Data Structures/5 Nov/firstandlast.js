// Find First and last position of element
// if repeats so first and second and if not [-1,-1]
// Similar question -> find the number of occurences of a Number in array


function left(arr, key) {
  let ans = -1;
  let i = 0,
    j = arr.length - 1;

  while (i <= j) {
    mid = Math.floor((i + j) / 2);
    if (arr[mid] == key) {
      ans = mid;
      j=mid-1;
      continue;
    }
    if (arr[mid] < key) {
      i = mid + 1;
    } else {
      j = mid - 1;
    }
  }

  return ans;

}

function right(arr, key) {
  let ans = -1;
  let i = 0,
    j = arr.length - 1;

  while (i <= j) {
    mid = Math.floor((i + j) / 2);
    if (arr[mid] == key) {
      ans = mid;
      i=mid+1;
      continue;
    }
    if (arr[mid] < key) {
      i = mid + 1;
    } else {
      j = mid - 1;
    }
  }

  return ans;
}

console.log([left([5, 7, 7, 8, 8, 10],8),right([5, 7, 7, 8, 8, 10],8)]); // wow question


