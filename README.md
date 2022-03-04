# Everything-Random
A lightweight package to make getting random numbers and objects so much easier

## Installation

Using npm:
```shell
$ npm i everything-random
```

In Node.JS:
```js
const er = require('everything-random');
const array = ["Hi", "Hello", "Car", "Food"];

er.randomNumber(1, 10, true);

er.randomArrayObject(array)

```
Usage:
```
er.randomNumber(min : Number, max : Number, round : Boolean)
```