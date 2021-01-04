# Create a new array

To create a new array from scratch

```js
const cars = ["BMW", "Audi", "Volvo"];
// [ 'BMW', 'Audi', 'Volvo' ]

const sameCars = new Array("Saab", "Volvo", "BMW");
// [ 'Saab', 'Volvo', 'BMW' ]

const nums = Array.from({ length: 3 }, (_, i) => i);
// [ 0, 1, 2 ]
```

# Add elements to end

The pop() method removes the last element from an array and returns that element. This method changes the length of the array.

```js
const animals = ['pigs', 'goats', 'sheep'];

const count = animals.push('cows');
console.log(count);
// expected output: 4
console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows"]

animals.push('chickens', 'cats', 'dogs');
console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]


cars.push("Honda"); // adds to same array object
// ['BMW','Audi','Volvo','Honda']

newCars = [...cars, "Honda"]; // This creates new object
// ['BMW','Audi','Volvo','Honda']
```

# Add elements to start

The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.

```js
const array1 = [1, 2, 3];

console.log(array1.unshift(4, 5));
// expected output: 5

console.log(array1);
// expected output: Array [4, 5, 1, 2, 3]

newCars = ["Toyata", ...cars];
//  [ 'Toyata', 'BMW', 'Audi', 'Volvo', 'Honda' ]

```
# concat two arrays
The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

```js
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3);
// expected output: Array ["a", "b", "c", "d", "e", "f"]

const array3 = [...array1,...array2]
console.log(array3);
// expected output: Array ["a", "b", "c", "d", "e", "f"]

```
