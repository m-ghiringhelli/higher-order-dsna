// map

function map(array, callback) {
  // create empty array to store values
  let newArray = [];
  // loop through the items in the array
  for (let i = 0; i < array.length; i++) {
    // apply callback to item
    const modifiedItem = callback(array[i]);
    // append to newArray
    newArray = [...newArray, modifiedItem];
  }
  // return new array
  return newArray;
}

const sampleArray = [1, 2, 3, 4];
const sampleFunction = (x) => {
  return x * 2;
};

//filter

function filter(array, callback) {
  // create empty array
  let newArray = [];
  // loop through the items in the array
  for (let i = 0; i < array.length; i++) {
    // check if item matches callback
    const item = array[i];
    if (callback(item)) {
      //add to empty array
      newArray = [...newArray, item];
    }
  }
  //return new array
  return newArray;
}

const returnEvens = (x) => {
  if (x % 2 === 0) {
    return true;
  } else {
    return false;
  }
};

// every

function every(array, callback) {
  // store a boolean value
  let passes = false;
  // loop through each item in array
  for (let i = 0; i < array.length; i++) {
    // store item in variable
    const item = array[i];
    // if item passes callback test, keep looping
    if (!callback(item)) {
      passes = false;
      return false;
    } else {
      passes = true;
    }
  }
  return passes;
}

// some

function some(array, callback) {
  let passes = false;
  // loop through array
  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    //check if callback is true
    if (callback(item)) {
      //return true
      passes = true;
      return true;
    } else {
      //if all callbacks are false return false
      passes = false;
    }
  }
  return passes;
}

//add punctuation

function addPunctuation(punc) {
  //return a function that appends str to another string
  return (string) => {
    return string + punc;
  };
}

// add first
function addFirst(element) {
  // return function that takes array
  return (array) => {
    // return new array with element as first element
    // create new array
    let newArray = [];
    // append element to new array
    newArray[0] = element;
    // append old array to new array
    newArray = [...newArray, ...array];
    // return new array
    return newArray;
  };
}

function fib(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  const sum = fib(n - 1) + fib(n - 2);
  return sum;
}

// root sum

function rootDigit(n) {
  const digits = n.toString().split('');
  const numbers = digits.map((d) => +d);
  const sum = numbers.reduce((a, b) => a + b);
  if (digits.length === 1) return digits;
  const newNumber = rootDigit(sum);
  return newNumber;
}
console.log(rootDigit(123));
console.log(rootDigit(4322));
console.log(rootDigit(999888777));
