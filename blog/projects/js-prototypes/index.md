---
path: /writings/js-prototypes
date: 2019-07-01
title: JavaScript Prototypes
description: A Beginner's Guide to JavaScript Prototypes
draft: true
---

## JavaScript Prototypes

For the longest time I stayed away from the `prototype` property in JavaScript. Part of it was laziness and part of it was fear of the unknown. It wasn't until I decided to fully take on JavaScript and learn the ins and outs that I started to finally understand how valuable it was to know how prototypes worked.

Here's the think, most objects in JavaScript (if not all) contain a property called `prototype`. To see what I mean, let's first take a couple steps back and see how OOP can be down in JavaScript.

### Building an Object Constructor

Now, I could give a detailed definition of `prototype` and the `prototype chain` but that's always where I get lost. So first, let's start with some code examples and walk through it.

```javascript
function Person() {
  // object's props and methods
}
```
