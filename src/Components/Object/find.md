# Find Item
The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
```js
const array1 = [1, 2, 3];

console.log(array1.includes(2));
// expected output: true

const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));
// expected output: true

console.log(pets.includes('at'));
// expected output: false
```
# Find position of item
The indexOf() and lastIndexOf() method returns the first index and the last index at which a given element can be found in the array, or -1 if it is not present.


```js
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison'));
// expected output: 1

// start from index 2
console.log(beasts.indexOf('bison', 2));
// expected output: 4

console.log(beasts.lastIndexOf('bison'));
// expected output: 4

console.log(beasts.indexOf('giraffe'));
// expected output: -1

```
# Find based on condition
The find() method returns the value of the first element in the provided array that satisfies the provided testing function. If no values satisfies the testing function, undefined is returned.

```js
const array1 = [5, 12, 8, 130, 44];

const found = array1.find(element => element > 10);

console.log(found);
// expected output: 12

```

# Find index based on condition
Returns the index of the first element in the array that satisfies the provided testing function. Otherwise -1 is returned. Similar to find(), but it returns the index instead of the item.
```js
const array1 = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;

console.log(array1.findIndex(isLargeNumber));
// expected output: 3


```