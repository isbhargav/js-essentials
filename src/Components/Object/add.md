# Create a new object

Object are key-value pairs. In javascript the keys are always string. To create a new Object from scratch.

```js
const cars = { type: "Fiat", model: "500", color: "white" };
// { type: 'Fiat', model: '500', color: 'white' }

const sameCars = new Object({ type: "Fiat", model: "500", color: "white" });
// { type: 'Fiat', model: '500', color: 'white' }
```

# Add elements to object

You can directly add properties on object.

```js
const animals = {};

animals.pigs = 12;
console.log(count);
// expected output: {pigs:12}

const newAnimals = { ...animals, goats: 10 };
// expected output: {pigs:12,goats:10}
```

# concat two objects

To concat two objects we can use es6 spread operator

```js
const object1 = { pigs: 10 };
const object2 = { goats: 12 };
const object3 = { ...pigs, ...goats };

console.log(array3);
// expected output: {pigs:10,goats:12}
```
