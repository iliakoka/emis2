function calculateArea(length, width) {
  if (length <= 0 && width <= 0) {
    console.log("Invalid Input");
  }

  const area = length * width;
  const perimeter = 2 * (length + width);
  return [area, perimeter];
}

const rectangle = calculateArea(5, 10);
console.log(rectangle);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; /// all functions below use those numbers!!!

function getEvenNumbers(numbers) {
  const evenNumbers = [];

  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];

    if (number % 2 === 0) {
      evenNumbers.push(number);
    }
  }

  return evenNumbers;
}

const evenNubers = getEvenNumbers(numbers);
console.log(evenNubers);

function getOddNumbers(numbers) {
  const oddNumbers = [];

  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];

    if (number % 2 === 1) {
      oddNumbers.push(number);
    }
  }

  return oddNumbers;
}

const oddNumbers = getOddNumbers(numbers);
console.log(oddNumbers);

function calculateSum(numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  return sum;
}

const numbersSum = calculateSum(numbers);
console.log(numbersSum);

function findMax(numbers) {
  let max = numbers[0];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }

  return max;
}

const maxNumber = findMax(numbers);
console.log(maxNumber);

const people = [
  { firstName: "John", lastName: "Doe", age: 30 },
  { firstName: "Jane", lastName: "Smith", age: 25 },
  { firstName: "Michael", lastName: "Johnson", age: 40 },
  { firstName: "Emily", lastName: "Williams", age: 22 },
];

function logPerson() {
  for (const person of people) {
    console.log(
      `Hello, I am ${person.firstName} ${person.lastName} and I am ${person.age} years old`
    );
  }
}

logPerson();
