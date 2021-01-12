# Sort in ascending 

Sorts the elements of an array in place and returns the array.

** If compareFunction is not supplied, elements are sorted by converting them to strings and comparing strings in Unicode code point order.**
```js

let arr = [5, 1, 8];
arr.sort();
console.log(arr);
// Output - [1, 5, 8]

let arr = [5, 1, 8, 10];
arr.sort();
console.log(arr);
// Output - [1, 10, 5, 8]

arr.sort((a,b)=>a-b);
console.log(arr);
// Output - [1, 5, 8, 10]

```

# Sort items in reverse order

Reverses the order of the elements of an array in place — the first becomes the last, and the last becomes the first.

```js
let arr = [5, 1, 8];
arr.reverse();
console.log(arr);
//[8, 5, 1]

let arr = [5, 1, 8, 10];
arr.reverse((a,b)=>a-b);
console.log(arr);
//[10, 8, 5, 1]
```