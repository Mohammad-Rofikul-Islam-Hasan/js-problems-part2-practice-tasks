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

// Task 4 Solution

const phones = [
            { model: "PhoneA", brand: "Iphone", price: 95000 },
            { model: "PhoneB", brand: "Samsung", price: 40000 },
            { model: "PhoneC", brand: "Oppo", price: 26000 },
            { model: "PhoneD", brand: "Nokia", price: 35000 },
            { model: "PhoneE", brand: "Iphone", price: 105000 },
            { model: "PhoneF", brand: "HTC", price: 48000 },
        ];

function findAveragePhonePrice (arr){
  let totalPrice = 0;
  
  for (let phone of arr){
  totalPrice = totalPrice + phone.price;
  }
  const averagePrice = Number((totalPrice / arr.length).toFixed(2));
  return averagePrice;
}

console.log(findAveragePhonePrice (phones))
