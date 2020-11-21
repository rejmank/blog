---
title: Pure functions
description: Is pure functions the most beautifull concept in programming?
date: 2020-04-19T11:00:00.000Z
---

# The beauty of pure functions

Starting with functional programming is hard. There is a ton of new concepts to learn, new terms, and sometimes even a new language. But there is one simple concept that can make your programs better immediately. Pure functions. These functions are easy to understand, easy to write but they will have a tremendous impact on your code.

## What are pure functions?

In short pure functions are functions that have no side effect and for each combination of parameters they return the same output. In reality, that means that you cannot request a database, make HTTP requests, or use random inside them or call functions that do so. No side effect means that they cannot change anything, not event their inputs. If you want to know more about pure function [this is a good start] (https://www.freecodecamp.org/news/what-is-a-pure-function-in-javascript-acb887375dfe/)

## Pure functions guide to better architecture

Using pure function means that you restrict yourself. That restriction forces you to think of better solutions for your problems. Recently I wrote an app that needed to work with a date. The first solution I think of was something like this:

```javascript
function doingDirtyThings() {
  // do something
  let result = workWithDate();
  // do something else
}

function workWithDate() {
  const date = new Date();
  // work with date...
  return data;
}
```

If you look at the functions, none of them is pure. the creation of date is a side effect and it makes the workWithDate function hard to test. I would let the code like this if part of my brain would not scream IT IS INPURE! The solution, in this case, is to move the creation of the date to doingDirtyThings function. This way we can easily test the workWithDate function just by supplying the created date as input. In the end, I needed to reuse the date later in the program so this change made everything easier.

```javascript
function doingDirtyThings() {
  // do something
  let date = new Date();
  let result = workWithDate(date);
  // do something else
}

function workWithDate(date) {
  // work with date...
  return data;
}
```

### Pure functions improve testability

I started to like writing tests since I started to write pure functions. The reason is that with pure functions the tests take almost no effort. You just import the function, throw some values at it, and look at the results. There is no mocking, no setup just values. Of course, you have to test the dirty parts of your app too, but the dirty parts are usually significantly smaller.

### Purity helps keep functions small and focused

Writing big bloated functions that are also pure is hard. I often find myself wondering how to avoid mutation and often the answer is: split the function! This gives you the benefit of better composability and it is much easier to reason about a small function that has single responsibility rather than a big bloated function.

### Purity helps to reason about code

There are simply fewer moving parts. That means that fewer things can be broken. In pure functions only thing that can be broken is function logic.

## Conclusion

If there is one concept from functional programming you should know its pure functions. As soon as you write a few of them you will encounter other benefits as easier composability etc. I hope that this article encouraged you to write more pure functions, the world needs it.
