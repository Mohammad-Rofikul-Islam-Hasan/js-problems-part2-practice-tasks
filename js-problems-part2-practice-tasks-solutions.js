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

function findAveragePhonePrice(arr) {
  let totalPrice = 0;

  for (let phone of arr) {
    totalPrice = totalPrice + phone.price;
  }
  const averagePrice = Number((totalPrice / arr.length).toFixed(2));
  return averagePrice;
}

console.log(findAveragePhonePrice(phones));

// Task 5 Solution

const employees = [
  { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
  { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
  { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
  { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];

function calculateSalary(arr) {
  let totalSalaryProvided = 0;

  for (let employee of arr) {
    console.log(employee);
    const salary = employee.starting + employee.experience * employee.increment;
    totalSalaryProvided = totalSalaryProvided + salary;
  }
  return totalSalaryProvided;
}

console.log(calculateSalary(employees));
