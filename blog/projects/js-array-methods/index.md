---
path: /writings/js-array-methods
date: 2019-07-23
title: JavaScript Arrays Batch_01
description: First batch of array methods you should add to your arsenal.
draft: false
---

Arrays are crucial to know for any software engineer. That's why I wanted to go through some JavaScript array methods to learn more about them and how one would use them in real-life scenarios. This is the first batch of many posts that consist of JavaScript Arrays.

## 1. Array.length

Not a method but a property used a lot. `Array.length` returns the length of your array. What a suprise right?

Basic example:

```javascript
// Array of DBZ saiyan characters
const saiyans = ['Goku', 'Vegeta', 'Trunks', 'Gohan'];

console.log(saiyans.length); // output: 4
```

Real-world example:

In a real-life scenarios, I use this property within `for loops` like so:

```javascript
// Array of DBZ saiyans again
const saiyans = ['Goku', 'Vegeta', 'Trunks', 'Gohan'];

for (let i = 0; i < saiyans.length; i++) {
  console.log(saiyans[i]);
}
// output:
// Goku
// Vegeta
// Trunks
// Gohan
```

Check out more details for [Array.length](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length).

## 2. Array.prototype.map()

The `map()` method returns a new array by returning a result from a function called on every element of the array.

Basic Example:

```javascript
// Array of super saiyans
const saiyans = ['Goku', 'Vegeta', 'Trunks', 'Gohan'];

// New array of powered up saiyans
const poweredUpSaiyans = saiyans.map(saiyan => `Super Saiyan ${saiyan}!`);

console.log(saiyans); // output: ["Goku", "Vegeta", "Trunks", "Gohan"]
console.log(poweredUpSaiyans); // output: ["Super Saiyan Goku!", "Super Saiyan Vegeta!", "Super Saiyan Trunks!", "Super Saiyan Gohan!"]
```

Real-world Example:

Now let's build a simple table that consists of 2 columns. One column is the saiyans name, and the other their power level. We need to generate a row for each of these saiyans. Here's how you could do it with `map()`.

```javascript
// List of saiyan objects. Each containing a name and power level.
const saiyans = [
  {
    name: 'Goku',
    powerLevel: 3500,
  },
  {
    name: 'Vegeta',
    powerLevel: 3200,
  },
  {
    name: 'Trunks',
    powerLevel: 4200,
  },
  {
    name: 'Gohan',
    powerLevel: 5000,
  },
];

// Let's assume we have a <table> element. We could then append our rows to it but iterating over tableContent.
const tableContent = saiyans.map(saiyan => {
  return `<tr><td>${saiyan.name}</td><td>${saiyan.powerLevel}</td></tr>`;
});
```

Check out more details for [map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map).

## 3. Array.prototype.includes()

The `includes()` method iterates through each element within an array and determines whether or not (true or false) the given value is within your array.

Basic Example:

```javascript
const senzuBeanValues = [4, 5, 3, 7, 2];

console.log(senzuBeanValues.includes(7)); // output: true
console.log(senzuBeanValues.includes(12)); // output: false
```

Real-world Example:

You can also check for strings. Let's say we have a list of Saiyans, and we want to see if the saiyan in question is part of the fight team.

```javascript
const saiyanFightTeam = ['Goku', 'Vegeta', 'Trunks', 'Gohan']; // Our fight team

let saiyanInQuestion = 'Trunks'; // Let's see if Trunks if part of the team
console.log(saiyanFightTeam.includes(saiyanInQuestion)); // output: true

saiyanInQuestion = 'Broly'; // Let's see if Broly is part of the team
console.log(saiyanFightTeam.includes(saiyanInQuestion)); // output: false
```

Keep in mind that the when comparing strings, `includes()` is case-sensitive.

Check out more details for [includes()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes).

## Summary

There you have it, my first batch of array methods/properties to add to you belt. They were: [Array.length](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length), [Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) and [Array.prototype.includes()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes). I'll be writing about more array methods in the near future. Stay tuned!
