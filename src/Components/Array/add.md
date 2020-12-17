# Create a new array

```js
const cars = ["BMW", "Audi", "Volvo"];
// [ 'BMW', 'Audi', 'Volvo' ]

const sameCars = new Array("Saab", "Volvo", "BMW");
// [ 'Saab', 'Volvo', 'BMW' ]

const nums = Array.from({ length: 3 }, (_, i) => i);
// [ 0, 1, 2 ]
```

# Add element to array

```js
cars.push("Honda"); // adds to same array object
// ['BMW','Audi','Volvo','Honda']

newCars = [...cars, "Honda"]; // This creates new object
// ['BMW','Audi','Volvo','Honda']

 newCars = ['Toyata',...cars]
//  [ 'Toyata', 'BMW', 'Audi', 'Volvo', 'Honda' ]

```

# Access elements of array
```js
cars[0]
// 'BMW'

```
