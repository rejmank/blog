---
title: The inconspicuousness of the pipe
description: Pipe is a magica door to the world of functional programming, why?
canonical_url: www.rejmank.com/functional-pipe
date: 2021-02-15T20:00:00.000Z
---

# The inconspicuousness of the pipe

I would describe pipe as a magic door into functional programming. At the first sight, I didn't get the pipe. It seemed so obsolete, but since I started to write them all other functional concepts suddenly started to clicking together. So how to start opening the doors into the ~~Narnia~~ functional programming world?

## What does pipe do?

The pipe is just a function that creates other functions by composing them. Okay, this didn't help. Let me try it again. Imagine that you have three [pure functions](https://rejmank.com/post/pure-functions). And you want to call them all, in sequence on one piece of data. Something like this:

```javascript
import { splitData, fromatItems, filterItems } from "./myModule";

function format1(data) {
  return filterItems(formatItems(splitData(data)));
}
```

This is called composition and it is a cornerstone of functional programming. But functional toolkit has a way to write this nicer the mighty pipe.

```javascript
import { pipe } from "ramda";
import { splitData, fromatItems, filterItems } from "./myModule";

const formatWithPipe = pipe(splitData, formatItems, filterItems);

const data = formatWithPipe(data);
```

The pipe just takes all the functions and spits out a new function. When you call the new function with data those data go through all functions in pipe.

## The readability benefit

Let's look at the code we have above once again, try to read all three functions.

```javascript
import { splitData, fromatItems, filterItems } from "./myModule";

function format1(data) {
  return filterItems(formatItems(splitData(data)));
}

function format2(data) {
  const splited = splitData(data);
  const fomatedItems = formatItems(splited);
  return filterItems(fomatedItems);
}

const format3 = pipe(splitData, formatItems, filterItems);
```

If you examine the first function it seems ok, this is an example of nice composition, but it has one problem, you need to read it from right to left. We are not used to reading out programs right to left so it breaks the reading flow.
The second version does not force you to switch the reading order but it is lengthy and the reading order is zig-zag so not ideal either.
At first sight, the pipe does not help that much but with time you will simply read the function from the top to bottom and immediately get an idea about what the function does. Reading flow, in this case, is the same as with other code and the function is nicely compact.
TIP: There is often a question about how to do logging inside pipe. Although we should strive to have our pipes pure during the development the console.log is one of the most helpful things. So how to do it? Just use R.tap, it allows you to log anywhere in your pipe. The other option is to create a log function, where you can specify other parameters like what to print before data.

```javascript
import {pipe, curry} from 'ramda'
import {splitData, fromatItems, filterItems} from "./myModule"

const _log = curry((message, value) => {
	console.log(message, value)
})

const format3 = pipe(
	splitData,
    _log('some string'),
    formatItems,
    R.tap(console.log) // logs the data after formatItems
    filterItems
)

const data = format3(data)

```

## A better understanding of functional tools

Other than looking good and increasing readability, the pipe has other benefits that are not apparent at the first sight. The pipe helps you understand the purpose of other functional concepts like curry, flip, map, etc. When I started to use pipe all the other functions started to make sense. With pipe functions become lego pieces that from time to time do not fit together. Functional tools often help you transform your legos that it fits together nicely.

## Pipe pushes you to write better functions

Another benefit of piping is that it pushes you to write better functions. You will find out that your functions suddenly have fewer inputs, they are pure and when you start to write a bigger function, you start to think about how to split it so it would compose nicely.

## Conclusion

In the beginning, pipe seems like just syntactic sugar with no value-added. But the readability benefit and the way it pushes you to write your code start to be apparent as soon as you write a few of them. Try it out, once you get used to it you will never look back.
