---
path: /writings/js-array-methods
date: 2019-07-23
title: JavaScript Array Methods
description: 5 array methods you should add to your arsenal.
draft: true
---

## 1. map()

The `map()` method returns a new array by returning a result from a function called on every element of the array.

Basic Example:

```javascript
// Array of people names
const people = ['Ben', 'Thomas', 'Henry', 'William'];

// New array of cool people
const coolPeople = people.map(person => `${person} is cool!`);

console.log(people); // output: ["Ben", "Thomas", "Henry", "William"]
console.log(coolPeople); // output: ["Ben is cool!", "Thomas is cool!", "Henry is cool!", "William is cool!"]
```

Real-world Example:

Check out more details for [map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map).

## 2. includes()

The `includes()` method iterates through each element within an array and determines whether or not (true or false) the given value is within your array.

Basic Example:

```javascript
const numbers = [1, 2, 4, 6, 7, 8];

console.log(numbers.includes(6)); // output: true
console.log(numbers.includes(23)); // output: false
```

Real-world Example:

You can also check for strings. Keep in mind that the when comparing strings, `includes()` is case-sensitive.

```javascript
const words = ['Hello', 'Fun', 'Coding'];

console.log(words.includes('Hello')); // output: true
console.log(words.includes('hello')); // output: false
```

Check out more details for [includes()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes).

## 3. reduce()

The `reduce()` method
