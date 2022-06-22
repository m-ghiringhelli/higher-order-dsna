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

console.log(map(sampleArray, sampleFunction));
