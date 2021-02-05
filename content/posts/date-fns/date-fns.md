---
title: Why I use date-fns
description: Why I use date-fns?
date: 2021-02-05T19:00:00.000Z
---

# Why I use date-fns

For a long time, momentjs was almost a standard for working with dates in JavaScript. It had several drawbacks such as size, no support for tree shaking, mutations... and it was also abandoned recently. So the natural question arose, what to use instead? For me, the answer is clear date-fns.

## Why not use native functions?

You can be almost sure that modern JavaScript date object have all you need in order to work with dates. There were always several drawbacks for me. For example, subtract the specified number of days from date looks like this in native JS and date-fns:

```javascript
// Native JavaScript
new Date(new Date().getTime() - 1000 * 60 * 60 * 24 * 7);
// date-fns
import subDays from "date-fns/subDays";
subDays(new Date(), 7);
```

When I encounter a native version in the code I need to stop and think about what it actually does. Looking at date-fns version I just know what the code does.
Another factor is that in order to work with dates I often need to use regex to parse the date from string or recount the number of days to milliseconds which is both things that I can easily make mistake in, or forget to test some edge cases.

## Functional

Date-fns have great support for functional programming. In module 'date-fns/fp' you can find all functions already curried and with switched order of parameters. If you don't know what currying is no worries, I am preparing a series about ramda and FP, or check out functional light javaScript. This makes usage with Ramda or Lodash breeze.
Another big benefit is that all functions in date-fns are pure. In this case, the main benefit of purity is that if I supply the function date, the date itself remains unchanged and a new date is returned instead.
Just look at the beauty:

```javascript
import * as R from "ramda";
import { addYears, format } from "date-fns/fp";

// we create new function that add five years and format the output
const addFiveYearsAndFormat = R.pipe(addYears(5), format("y-M-dd"));

const date = new Date();
// we can call the function anywhere with any date object
addFiveYearsAndFormat(date); // '2026-2-04'
// addYears is pure function so it did not change the input
date.getFullYear(); // 2021
```

## Great documentation and completeness

The documentation for date-fns is great. For each function, you will find a bunch of examples, what the function returns and what exceptions it can throw. The only thing that I miss is some kind of playground similar to Ramda documentation.
That level of documentation is even more impressive if you take into account how many functions does the library provides. So far I did not encounter anything that the library does not have. From parsing to working with ranges, comparing to formatting the date-fns have it all.
Great is also support for tree shaking that can save you a bunch of kilobytes from your bundle.

## Conclusion

Date-fns is a great library. If you need to work with dates this library provides everything you need and a bunch of extra things on top. If you are still not convinced check out the [documentation](https://date-fns.org/) or [this awesome repository](https://github.com/you-dont-need/You-Dont-Need-Momentjs#quick-links) that compares other options for working with dates.
