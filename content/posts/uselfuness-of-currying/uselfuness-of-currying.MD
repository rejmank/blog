---
title: The usefulness of currying
description: What to do if your functions do not fit together in pipe? How to make composition easier? Read the article and you get the answer.
canonical_url: www.rejmank.com/uselfuness-of-currying
date: 2021-02-20T20:00:00.000Z
---

# The usefulness of currying

In the [last article about pipe](https://rejmank.com/post/functional-pipe) I wrote that while using a pipe to compose functions, those functions start to look like lego pieces. But what would you do if the pieces don't fit together? In a functional toolbox, there is a tool for that, it is called pipe and it is something that every functional programmer should have under their belt.

## What is curry?

Currying allows us to create a new function by providing some parameters for that function ahead of time. Let me show you this on some code:

```javascript
import { curry } from "ramda";

// we have one general function that counts the discount
const countDiscound = curry((discountInPercent, originalPrice) => {
  originalPrice * ((100 - discountInPercent) / 100);
});
// Here we have single purpose function that we want to use somwhere in program
const countSeventyPercentDiscount = (originalPrice) => 0.75 * originalPrice;

// There is easier way to create the specific functions, because we curried general
// function we can use it to create the same functions as above, while using the
// original multipurpose function
const countSeventyPercentDiscount = countDiscound(70);
const countSeventyPercentDiscount = countDiscound(80);
```

You can see the difference yourself, the functions we created with curry use less code, do not repeat the same logic and thus it obey the DRY (don't repeat yourself) principle.

## Specific functions

Curry allows us to create single purpose functions from generic functions.

```javascript
// parse imported from date-fns/fp is already curied
import { parse } from "date-fns/fp";

// we create new function that help us parse some internal date string
// we can now use it in the rest of our program
const parseInternalTimeString = parse(new Date(), "h:mmaa");

const parsedInternal = parseInternalTimeString("06:30AM"); // 2021-02-19T05:30:00.000Z
```

Other than saving some lines of code, this approach also has another, not so obvious benefit, it increases readability. If you encounter the parse function used like this:

```javascript
const parsedDate = parse(new Date(), "h:mmaa", "06:30AM");
```

It does not exactly tell you that the parsed string is some company internal format and it also reveals the detail you don't necessarily need to know, the format for parsing. Every time you want to parse the internal time string you need to remember or search for parse string. On the other hand, using the curried function the name itself reveal that you can use it on internal time strings, and to use it you do not need to know anything. This technique is beneficial if you do domain-driven design.
Currying has also a huge benefit for composition. Recently I needed to parse the date that was included in the filename I used composition as follows:

```javascript
import { parse } from "date-fns/fp";
import { split, prop, pipe } from "ramda";

const getDateFromFileName = pipe(
  split(".csv"),
  prop(0),
  parse(new Date(), "h:mmaa")
);

getDateFromFileName("06:30AM.csv"); // 2021-02-19T05:30:00.000Z
```

Curry, in this case, allowed me to create a simple function that parses the filename. All three functions benefit from curry, without curry we could not use Pipe and without pipe our code would be much less readable. It would look like this:

```javascript
import {parse} from 'date-fns/fp'
import {split, prop, pipe} from 'ramda'

const getDateFromFileName = (filename) => {
    const parse(new Date(), 'h:mmaa', prop(0, split('.csv', filename)))
}
getDateFromFileName('06:30AM.csv') // 2021-02-19T05:30:00.000Z
```

If you have at least a little bit of experience with pipe, you red the first function without any problems. The second version on the other hand takes at least a little bit of effort and switches reading order from left to right to right to left.

## How does curry work?

When I was learning about closures, understanding how curry works internally was really helpful for me. So let's take a look at one, naive implementation.

```javascript
// this implementation requires the first argument in the time we curry it
const curryOne = (func, parameter) => {
  // the function returns new function, it remembers the first parameter using closure
  return (secondParam) => {
    // after we call the returned function, it calls the original function with all
    // parameterers and return the result
    return func(parameter, secondParam);
  };
};

function add(a, b) {
  return a + b;
}

const addFive = curryOne(add, 5);

addFive(6); // 11
```

This implementation of curryOne (it can help to curry only one parameter) works by using closure to remember the first parameter. And this is all the magic that closures have. Although this code is a nice example of using closure do not use it in production or as your curing solution, rather use ramda.

## What if the parameters are in the wrong order?

There is often the situation that you want to curry some function but the parameters are in the wrong order. Luckily we have a solution for this in our functional toolbox. The first one is **a flip** function. What flip does is that it takes a function, **switches parameters order**, and returns the function.

```javascript
import { flip } from "ramda";
const subtract = (a, b) => a - b;

R.pipe(
  getSomeNumber,
  // now we want to substract 10 from number we got
  // we first flip the parameters order and then curry the function
  R.curry(R.flip(subtract))(10)
);
```

If we have already curried function we can use **\_\_** function t**o skip some of the parameters**. For example, we can use ramda map function and create a function that accepts a function and apply it to predefined data.

```javascript
import { __, map } from "ramda";

const applyFunctionOnArrayOfNumbers = map(__, [1, 2, 3, 4]);
```

## Partial

Another function that allows us to do a similar thing as curry in ramda is partial. The difference between currying and partial application is subtle and rather academic. In ramda the difference is that using partial you can provide an array of parameters to a function, instead of supplying the parameters as one after another. If you are interested in the differences between curry and apply I recommend this article from [2ality.com](https://2ality.com/2011/09/currying-vs-part-eval.html)

```javascript
import { partial } from "ramda";

const addThree = (a, b, c) => a + b + c;

const addToThree = partial(addThree, [1, 2]);

addToTrhee(4); // 7
```

## Conclusion

Currying is one of the most practical things that functional programming can offer you. It gives you the flexibility to create small single-purpose functions, allows you to create better compositions, and profit from the functional paradigm even more. Combined with pipe you will be amazed at the beauty your fingers will produce.

This is third article in functional javascript series:

- [The beauty of pure functions](https://rejmank.com/post/pure-functions)
- [The benefits of pipe](https://rejmank.com/post/functional-pipe)
- [**_The usefulness of currying_**](https://rejmank.com/post/uselfuness-of-currying)
