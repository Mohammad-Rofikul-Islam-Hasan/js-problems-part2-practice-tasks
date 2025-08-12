// Task 1 Solution
const heights2 = [167, 190, 120, 165, 137];

function getLowestNumber(arr) {
  let lowest = arr[0];
  for (let num of arr) {
    if (num < lowest) {
      lowest = num;
    }
  }
  return lowest;
}

console.log(getLowestNumber(heights2));
