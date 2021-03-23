---
title: Why I started to fall in love with go
description: I finally try golang and i liked it! This sumarizes my first thougths and feelings about the language.
canonical_url: www.rejmank.com/why-i-started-to-fall-in-love-with-go
date: 2021-03-23T20:00:00.000Z
---

# Why I started to fall in love with go

I am a JavaScript developer by soul. In school, I have had java classes and before the first job I played with some python but since I switched to JavaScript I newer looked back. I could build a frontend in it and after I learned node even server-side things. The language has its shortcomings and quirks but overall it is a nice, simple language that gives you a lot of power at your fingertips with a huge ecosystem of libraries. But I felt that I need to have a second tool under my belt so recently I started to search for my second language.

## What do I want from a second language?

The reason I wanted to learn a second language, other than a pure curiosity, was that I want to have something that can be used for some heavy lifting. I also wanted to learn a language that is using static typing to see the benefits and drawbacks myself. A nice benefit would be if there are some jobs using the language.

## What I tried so far?

I tried F# and Rust so far but non of them hook me for a long time.

F# is a great functional language. In my opinion, there is no better place to learn typed functional programming. After some tutorials and exercises, I hit the ecosystem wall. I just was not willing to learn about the ecosystem. [This article](https://dusted.codes/dotnet-for-beginners) summarizes my experience pretty well. If you add that the F# community seems to prefer frameworks over libraries, it was something that I simply did not have enough grit for.

Rust was a little bit different. I finished the rustlings but I was not able to write anything. It was just too many new concepts for me to learn. The power of language is huge, immutability first, and support for functional programming is also great but for someone who never worked with typed language much, it was just too hard.

Just to be clear, those objections against languages say more about me than about languages. I would be more than happy to use them in my job. But for my side projects and as a second language I just did not have the grit.

## Go

Then I read an [older article by sw-samuraj](https://sw-samuraj.cz/2018/09/golang-micro-services-prvni-ohlednuti) about his experience using GO in his job. He mentioned many positive aspects and one of them was that he felt using go was similar to writing code in clojure. This got my attention. I explored the language a little bit and after a week I spend learning to Go I am hooked.

The main reason I am excited is simplicity. I was able to start coding fast. The language itself is small and has a really good standard library. Standard library have you covered for most of the day-to-day tasks from writing basic server to CSV parsing. The only thing I am missing is map, filter, and reduce. But there are libraries that can help with this and with the generics coming I expect a lot of FP libraries to pop up.

The type system was easy to learn. It kind of surprised me after my experience with rust where most of my learning was how to do the types correctly. This might change with the generics but I would not expect a huge rise in complexity.

Goroutines is another nice thing. I did not use them much so far but they influenced clojure core.async library and also is one of the selling points of language so I expect them to be great.

With Go, you have enough speed that you can tackle almost anything from image processing to machine learning. This makes go universal language and a big plus for me.

## Conclusion

So far I have had a pretty good experience with go. I was amazed at how fast I created some simple scripts. The learning curve is smooth and the community and resources are great. It is hard not to fall in love with go.
