# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @npwxx/lotide`

**Require it:**

`const _ = require('@npwxx/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

*`assertArraysEqual`: testing if 2 arrays are the same
*`assertEqual`: test to see if 2 things are equal
*`assertObjectsEqual`: test to see if two objects are equal
*`countLetters`: returns the amoumt of times each letter is in a string 
*`countOnly`: returns the number of times an element occurs in a list
*`eqArrays`: testing to see if 2 arrays are equal
*`eqObjects`: testing to see if 2 objects are equal
*`findKey`: will return the key of an object by searching with a callback
*`findKeyByValue`: will search for a key of an object when you input the value of that key
*`flatten`: will take an array of arrays & push each elem of each array into a new array in order *no recursion yet
*`head`: will return the first element in an array
*`letterPositions`: will return the position of a letter in a string
*`map`: will implement an inputed action to each element in the array
*`middle`: finds & returns the middle of an array
*`min`: returns the lowest number in an array
*`tail`: returns all elements in the array except the first one
*`takeUntil`: pushes elements from an array into a new array until the input element is reached.
*`without`: returns a new array without a specified item in it