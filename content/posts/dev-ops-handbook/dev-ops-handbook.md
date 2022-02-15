---
title: The DevOps handbook - summary
description: Summary of the best DevOps book i red so far.
canonical_url: www.rejmank.com/dev-ops-handbook
date: 2022-02-15T20:00:00.000Z
---
## The DevOps handbook - summary

DevOps handbook is one of the most important DevOps books on the market. It combines the most important DevOps ideas, examples from known companies, and best practices. It does not have any code so it is an ideal book for non-technical readers that would like to know what their teams are talking about. Bellow, you find a summary with the ideas that stick with me the most.

## Flow and Feedback 
The first thing we want to accomplish in DevOps is to have fast feedback on our work. The first frontier, before the ultimate testing on production, is a set of well-written fast tests. Those tests should be able to run in parallel and they should be run on each commit automatically. Tests that are not run are useless, and the only way to enforce running those tests is using automation. This allows us to have basic confidence in our code and the fast feedback provided by fast pipeline should not break the flow. The testing should be not limited to unit tests but it can (and should) test also security, integration, and other aspects of our application. Important is to run different tests on different occasions (run slow tests less often) to not break the developer`s flow.

> ...a small number of reliable, automated tests are almost always preferable over a large number of manual or unreliable automated tests.

## Get it out!
You will never test everything. In production, someone will always do something you do not expect, try to hack you, or will not use your shiny feature at all. And the only way to test this is to go to production as fast as possible. This is the only way to test (almost) every possible scenario and see the outcomes. Of course, going fast to production have its dangers but we can mitigate them using tools such as shadow releases, canary testing, or blue-green release pattern. With frequent releases, we generally get smaller release sizes which is associated with a higher deployment success rate.

> ...when we increase our deployment batch size, our change success rates go down and our incident counts and MTTR go up—the opposite of the outcomes we want.

## Observer and learn

If we put our code into production we need to have a way to observe the code running. Other than standard metrics such as CPU and Memory usage, percentage of a cache hit, and other technical measures we should also have business metrics available. Does our new feature that is promoted everywhere have poor usage? It might be caused by a technical issue such as poor performance or distorted render on some browsers. The second case can be that we simply build the wrong thing. Both outcomes are valuable for us developers so we should have access to those metrics to be able to learn from them.

> ...business metrics create context for our infrastructure metrics, enabling Development and Operations to better work together toward common goals.

## Involve everyone
One of the most important lessons for me was how important is to make everyone more exposed to other team's problems. In the end, we all work toward a common goal. By being more exposed to problems of developers, testers, or ops we can often find better solutions to problems, fix the problems earlier, cheaper and build empathy for other teams.

> ...how to make Dev work more visible to Operations. To accomplish this, we explored three broad strategies, including creating self-service capabilities to enable developers in service teams to be productive, embedding Ops engineers into the service teams, and assigning Ops liaisons to the service teams when embedding Ops engineers is not possible.

## Conclusion
The DevOps handbook is one of the technical books that will fill your head with ideas. It will not teach you how to create an ideal pipeline, nor it will give you the answers to all problems but it will tickle those parts of your brain that know that our job can be done better. 

> Our call to action is this: no matter what role you play in your organization, start finding people around you who want to change how work is performed. Show this book to others and create a coalition of like-minded thinkers to break out of the downward spiral.
