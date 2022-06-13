---
title: Intro to DevOps part one
description: In the first part, we will look at what DevOps is, how it came to be and what benefit it brings to us.
date: 2022-06-11T20:00:00.000Z
---

I think we all agree that we developers should know why we do things. We usually know why we like our language of choice, why choose fp over oop, and why the legacy code we are rewriting is really terrible. But with DevOps, I often feel that for all the shiny toys (trees) we miss the whole DevOps forest. So let me take you on the walk through the DevOps forest.

In the first part, we will look at what DevOps is, how it came to be and what benefit it brings to us, and how to measure it. In the second part, we will look into tools and practices that can help us.

## Short history of DevOps

It all started when [Patrick Debois](https://twitter.com/patrickdebois?lang=cs) was fed up with the way of creating software at the time. It usually worked like this: You would first write the code, hand it to the QA and wait for a response. Then you would fix the bugs they found and send the code back. You would continue with the ping pong until the QA said that it is ok or, more often, the management says that time is up. After that, the Ops take over and try to run the mess. The time between you write your code and the code running in production could be in months. Every deployment was an event worth celebrating (or drowning the failure in beer). So Patrick formed an Agile systems administration group together with Andrew Shafer and started the revolution. It all got traction in 2009 with one of the most famous talks in DevOps history the [10 deploys per day Dev & ops cooperation at Flickt](https://www.slideshare.net/jallspaw/10-deploys-per-day-dev-and-ops-cooperation-at-flickr). It is still incredibly fresh so check it out.

# What is DevOps

What is DevOps? This question does not have an easy answer. Some will say that it is about developers running their own code, for some companies it is a move to the cloud, and for some, it is about using Kubernetes (you cannot run Kubernetes without DevOps, right?). But in reality, DevOps does not have much to do with the tools we use. DevOps scope ranges from continuous integration and delivery through testing automation all the way to the design of teams. Here is my favorite definition of DevOps:

> The DevOps philosophy builds upon the Agile Principles. You can look at it as a combination of cultural philosophies, practices, and tools that increases a company’s ability to deliver applications and services faster... (https://www.bunnyshell.com/blog/how-netflix-does-devops)

## It is all about speed

Ok now we get an idea of what DevOps is but for all companies, the goal is to make money. How will DevOps help with this? Imagine two companies. From the outside, both of them look similar. They have an e-shop and sell the same product. They even have a similar number of developers employed. Now let's imagine that the first one have DevOps practices in place and the second don not, which one should be more successful?
If you said the first one great, but do you know why?
It is all about speed. What DevOps brings us in the first place is **increase in the number of useful features delivered**. And it is not because the developers work more hours. It is because the features go faster into production and the company can **learn faster**. Developers will not spend hours building something nobody wants. We will discover the bugs in our code faster and we will learn about those bugs that we would not find otherwise (production is a wild space)

## How do we do in terms of DevOps

Old managers telling says that what we do not measure we do not control. So how to tell if your project has good DevOps? There are 4 basic metric called DORA that can help us to measure our "devOpsiness". Those are:

- Lead time - How long it takes from commit to production,
- Deployment frequency - how often do we deploy to production,
- Change failure rate - How many changes end up with an issue in production,
- Mean time to recovery - how long it takes for failure in production to be mitigated.

Those four metrics are connected so if you get better at one the domino effect will kick in and you will get better at the rest. Let's say that you start the DevOps journey by shortening the lead time. It will mean that you will make smaller changes to your product. With smaller changes, you will have to deploy more frequently to have the same velocity. Smaller changes mean easier spotting of mistakes and easier testing. So the change failure rate goes down. And with the smaller changes, the revert of changes and ideally code fixing gets also easier.

> give developer two lines change and he will find 10 mistakes, give him 2000 lines change and he will say "looks good"

## Conclusion

Now we should see the forest and we know what purpose it has and also know if we have some issues and what metrics to use to spot them. Next time we will look into practices that will help with DevOps practices.
