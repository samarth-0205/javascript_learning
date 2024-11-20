let data = ['abc', 43.34, true, "orange", 666, true]

// push() adds value at the end of array
data.push("xyz")
data.push(20)

// pop() removes last element from array
res = data.pop()
console.log(res);

// unshift() adds element at the start of array
data.unshift(111)

// shift() removes the first element of an array
data.shift()

let new_data = data.join()

// console.log(data);
// console.log(new_data);

// slice
// makes a new sallow copy of array and works on it
// goes upto end value but do not print it
let new_slice = data.slice(1,4)
console.log(new_slice);
console.log(data);

// splice
// works directly on original array
// goes upto end value and also print it
let new_splice = data.splice(1,4)
console.log(new_splice);
console.log(data);
