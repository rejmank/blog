+++
title = "Tidy First? by Kent Beck"
author = ["Rejman Jiří"]
tags = ["programming", "code", "tech"]
categories = ["books"]
draft = false
rating = 4
image = "https://m.media-amazon.com/images/I/812OKv4P8qL._SL1500_.jpg"
order = 9
+++

Tidy first? Is a short book about the little things you can do to have nice code. Not as beginner-friendly as Clean Code, but better. Apart from listing possible techniques for tidying, it tries to describe when, if and why tidying is worth it. It was definitely an interesting read.

<!--more-->

> When we observe that a certain class of features is hard to add, we design until the pressure is relieved.

>```if (not condition) return
if (other condition) return
...some code... ```
This is easier to read. It says, “Before we get into the details of the code, there are some preconditions we need to bear in mind.”


> So you need to call a routine, and the interface makes it difficult/complicated/ confusing/tedious. Implement the interface you wish you could call and call it. Implement the new interface by simply calling the old one



> No single ordering of elements is perfect. Sometimes you want to understand the primitives first and then understand how they compose. Sometimes you want to understand the API first and then understand the details of implementation. You’re the reader, so use your judgment and (recent) experience. What order would you have liked to encounter? Give the gift of that sequence to the next reader.


> Reorder the code so the elements you need to change are adjacent. Cohesion order works for routines in a file: if two routines are coupled, put them next to each other. It also works for files in directories: if two files are coupled, put them in the same directory.


>When you understand a part of a big, hairy expression, extract the subexpression into a variable named after the intention of the expression.


> In this tidying you are taking your hard-won understanding and putting it back into the code.

> Another case for explicit parameters is when you find the use of environment variables deep in the bowels of the code. Make the parameters explicit, then be prepared to push them up the chain of calling functions.

> This one wins the prize for simplest tidying. You’re reading a big chunk of code and you realize, “Oh, this part does this and then that part does that.” Put a blank line between the parts.


> Sometimes you read code that’s been split into many tiny pieces, but in a way that hinders you from understanding it. Inline as much of the code as you need until it’s all in one big pile. Tidy from there.


> You know that moment when you’re reading some code and you say, “Oh, so that’s what’s going on!” That’s a valuable moment. Record it.


> The tidyings have to go somewhere, or you don’t tidy. Where do they go? Summary: they go in their own PRs, with as few tidyings per PR as possible.



> Behavior changes tend to cluster in the code. From Pareto, 80% of the changes will occur in 20% of the files. One of the beauties of tidying first is that the tidyings cluster too. And they cluster in exactly those spots most attractive for behavior changes.


> Understanding theory optimizes application. The forever questions in software design are:   When do I start making software design decisions?
   When do I stop making software design decisions and get on with changing the behavior of the system?
   How do I make the next decision?


> To prepare to write their classic text Structured Design, Ed Yourdon and Larry Constantine examined programs to find out what made them so expensive. They noticed that the expensive programs all had one property in common: changing one element required changing other elements. The cheap programs tended to require localized changes.


> cost(software) ~= coupling
