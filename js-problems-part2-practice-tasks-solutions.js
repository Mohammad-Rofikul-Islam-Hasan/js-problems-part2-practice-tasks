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

// Task 2 Solution

const friends = ["rahim", "robin", "rafi", "ron", "rashed"];

function getSmallestName(arr) {
  let smallestName = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].length < smallestName.length) {
      smallestName = arr[i];
    }
  }
  return smallestName;
}

console.log(getSmallestName(friends));
