const helloElm = document.getElementById('hello');
helloElm.innerText = 'Hello World';

const a = 'Hello';
helloElm.innerHTML = '<h1>Hello' + a + '</h1>';
helloElm.innerHTML = `<h1>Hello ${a}</h1>`;

// let vs const vs var

let y = 100;

y = 200;

// value

const fruits = ['apple', 'pear', 'banana'];

let html = '<ul>';

fruits.forEach((fruit) => {
  html += `<li>${fruit}</li>`;
});

html += '</ul>';

helloElm.innerHTML = html;

// ternary

// (conditional statement) ? (true statement) : (false statement)

let today = new Date('02/12/2021').getDay();

let friday = 5;

let text = today == friday ? 'party!' : 'blah';

helloElm.innerHTML = text;

function fizzBuzz(number) {
  let answer = '';
  if (number % 3 == 0) {
    answer += 'Fizz';
  }
  if (number % 5 == 0) {
    answer += 'Buzz';
  }

  return answer ? answer : number;
}

console.log(25, fizzBuzz(25));
console.log(9, fizzBuzz(9));
console.log(15, fizzBuzz(15));
console.log(34, fizzBuzz(34));

const cars = ['Jeep', 'Ford', 'Toyota', 'Fiat', 'Honda'];

printCars(cars, 'cars');

document.getElementById('cars1').innerText = cars[1];

cars[0] = 'Tesla';

printCars(cars, 'cars2');

document.getElementById('cars3').innerText = cars.length;

function printCars(carsArray, htmlId) {
  let carsHtml = '<ol>';
  carsArray.forEach(function (car) {
    carsHtml += `<li>${car}</li>`;
  });
  carsHtml += '</ol>';

  document.getElementById(htmlId).innerHTML = carsHtml;
}

/**
 * Write a function that multiplies two 2x2 matrices and returns the resulting matrix.
 * The matrix will be represented by a 2D array and remember that matrix multiplication
 * is done using the dot product of rows and columns. Refer to this for the dot product
 * algorithm and here to check your work
 */

function multiply(matrixA, matrixB) {
  const result = [[], []];
  result[0][0] = matrixA[0][0] * matrixB[0][0] + matrixA[0][1] * matrixB[1][0];
  result[0][1] = matrixA[0][0] * matrixB[0][1] + matrixA[0][1] * matrixB[1][1];
  result[1][0] = matrixA[1][0] * matrixB[0][0] + matrixA[1][1] * matrixB[1][0];
  result[1][1] = matrixA[1][0] * matrixB[0][1] + matrixA[1][1] * matrixB[1][1];

  return result;
}

console.log(
  multiply(
    [
      [1, 2],
      [3, 4],
    ],
    [
      [5, 6],
      [7, 8],
    ]
  ).toString()
);
console.log(
  multiply(
    [
      [23, 54],
      [67, 8],
    ],
    [
      [4, 4],
      [4, 4],
    ]
  ).toString()
);

/**
 * Loops
 */

// Your task is to create an array with ten items and then create a for loop
// to iterate through them in reverse order

const array = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

for (let i = array.length - 1; i >= 0; i--) {
  console.log(array[i]);
}

/**
 * .map, .filter, .reduce
 */

// map

function getNames(personArray) {
  const names = [];
  personArray.forEach(function (person) {
    names.push(person.name);
  });
  return names;
}

const people = [
  {
    name: 'Sofia',
    age: 34,
  },
  {
    name: 'Luke',
    age: 15,
  },
  {
    name: 'Tom',
    age: 65,
  },
  {
    name: 'Amanda',
    age: 20,
  },
];

console.log(getNames(people));

let names = people.map((person) => person.name);

console.log(names);

// filter

function getOlderThanAge(peopleArray, age) {
  const older = [];
  peopleArray.forEach(function (person) {
    if (person.age > age) {
      older.push(person);
    }
  });
  return older;
}

console.log(getOlderThanAge(people, 30));

console.log(
  people.filter(function (person) {
    return person.age > 30;
  })
);

function countSelectedElements(array) {
  return array.filter(function (element) {
    return element.selected;
  }).length;
}

function countSelectedElements(array) {
  return array.filter((element) => element.selected).length;
}

const myItems = [
  {
    name: 'car',
    selected: true,
  },
  {
    name: 'computer',
    selected: false,
  },
  {
    name: 'phone',
    selected: true,
  },
  {
    name: 'keys',
    selected: false,
  },
];
const selectedItems = countSelectedElements(myItems);
console.log(selectedItems);

// arrow functions

function name(params) {}

const name1 = () => {};

// functions

function findLongest(...words) {
  // declare a variable to keep track of longest word
  let longest = '';

  // loop through the array words and check if the word at that index is
  // longer than the current longest word
  words.forEach((word) => {
    if (word.length > longest.length) {
      // if it is, then replace the current longest word with the word at that index
      longest = word;
    }
  });

  // return current longest word
  return longest;
}

let result = findLongest('dream', 'big', 'dreams');
let result1 = findLongest('selected', 'big', 'ice');

console.log('longest word was: ' + result);
console.log('longest word was: ' + result1);

function apply(fn, a) {
  // return the result of calling/executing fn passing a into it
  return fn(a);
}

let result2 = apply(function (a) {
  return a + a;
}, 'yum ');
// result == 'yum yum '
console.log(result2);

let result3 = apply(function (a) {
  return a * a;
}, 5);
// result == 25
console.log(result3);

// recursion

function fib(n) {
  if (n == 0) {
    return 0;
  }

  if (n == 1) {
    return 1;
  }

  // return the nth fibonacci number
  // Xn = Xn-1 + Xn-2
  return fib(n - 1) + fib(n - 2);
}

console.log(fib(4));

/**
 *
 * OOP
 *
 */

function Car(make, model, year, engine) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.engine = engine;
}

function Engine(cylinderCount, horsePower, modelNumber) {
  this.cylinderCount = cylinderCount;
  this.horsePower = horsePower;
  this.modelNumber = modelNumber;
  this.toString = function () {
    return `${this.modelNumber} ${this.cylinderCount} ${this.horsePower}`;
  };
}

let v6turbo = new Engine(6, 450, 'gt-456');
let myCar = new Car('nissan', 'GT-R', 2015, v6turbo);

class User {
  constructor(id, lists = []) {
    this.id = id;
    this.lists = lists;
  }
  addList(list) {}
  removeList(listId) {}
}

class List {
  constructor(name, id, todos = []) {
    this.name = name;
    this.id = id;
    this.todos = todos;
  }
  addTodo(todo) {}

  removeTodo(todoId) {}

  getTodo(todoId) {}

  clearCompletedTodos() {}
}

class Todo {
  constructor(text, id) {
    this.text = text;
    this.id = id;
    this.completed = false;
  }

  markAsCompleted() {}

  edit(text) {}
}