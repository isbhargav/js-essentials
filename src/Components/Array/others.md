# find Length of array

Get the number of elements in that array.
```js
let arr = [5, 1, 8];
console.log(arr.length);
// output: 3
```

# Map the elements of array

The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
```js
const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]
```

# Filter elements of array
The filter() method creates a new array with all elements that pass the test implemented by the provided function.
```js
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]
```

# Reduce elements of array

The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in single output value.

```js
const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15

```

# Serialize array
The toString() method returns a string representing the specified array and its elements.

```js
const array1 = [1, 2, 'a', '1a'];

console.log(array1.toString());
// expected output: "1,2,a,1a"
```