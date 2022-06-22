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
    if (callback(item)) passes = true;
    // if item fails, return false
  }
}

//add punctuation

function addPunctuation(punc) {
  //return a function that appends str to another string
  return (string) => {
    return string + punc;
  };
}
const addExcitement = addPunctuation('!!!');
console.log(addExcitement('Hello World'));
// Hello World!!!
console.log(addExcitement('Pokemon, catch em all'));
// Pokemon, catch em all!!!
