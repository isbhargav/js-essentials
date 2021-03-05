# Iterate with for loop

The plain for loop in JavaScript is old. It already existed in ECMAScript 1. This for loop logs the index and value of each element of arr.

```js
for (let index=0; index < someArray.length; index++) {
  const elem = someArray[index];
  // ···
}
```

# Iterate with for-in loop

The for-in loop is as old as the for loop – it also already existed in ECMAScript 1. This for-in loop logs the keys of arr:
```js
const arr = ['a', 'b', 'c'];
arr.prop = 'property value';

for (const key in arr) {
  console.log(key);
}

// Output:
// '0'
// '1'
// '2'
// 'prop'
```

# Iterate with forEach

Given that neither for nor for-in are particularly well suited for looping over Arrays, a helper method was introduced in ECMAScript 5. This method is really convenient: It gives us access to both Array elements and Array element indices without us having to do much. Arrow functions (which were introduced in ES6) made this method even more syntactically elegant.

```js
const arr = ['a', 'b', 'c'];
arr.prop = 'property value';

arr.forEach((elem, index) => {
  console.log(elem, index);
});

// Output:
// 'a', 0
// 'b', 1
// 'c', 2
```

# Iterate with for-of loop

The for-of loop was added to JavaScript in ECMAScript 6:
for-of works really well for looping over Arrays:

**It iterates over Array elements.**

**We can use await and it’s easy to migrate to for-await-of, should you need to.**

**We can use break and continue – even for outer scopes.**
  
```js

const arr = ['chocolate', 'vanilla', 'strawberry'];

for (const elem of arr) {
  console.log(elem);
}
// Output:
// 'chocolate'
// 'vanilla'
// 'strawberry'

for (const [index, elem] of arr.entries()) {
  console.log(index, elem);
}
// Output:
// 0, 'chocolate'
// 1, 'vanilla'
// 2, 'strawberry'
```