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

console.log(data);
console.log(new_data);
