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

// Task 3 Solution

const laptop = 35000;
const tablet = 15000;
const Mobile = 20000;

function calculateElectronicsBudget(laptopQty, tabletQty, mobileQty) {
  const totalMoneyRequired =
    laptop * laptopQty + tablet * tabletQty + Mobile * mobileQty;
  return totalMoneyRequired;
}

console.log(calculateElectronicsBudget(2, 1, 3));
