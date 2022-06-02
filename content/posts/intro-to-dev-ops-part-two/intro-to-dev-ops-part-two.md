---
title: Intro to DevOps part two
description: In the last part, we talked about what DevOps is, what benefits it brings us, and how to know if we are doing good in terms of "DevOpsNess". Now we will look into what tools and practices can help us to achieve as much as possible.
date: 2022-06-02T15:00:00.000Z
---

# DevOps tools and practices

In the last part, we talked about what DevOps is, what benefits it brings us, and how to know if we are doing good in terms of "DevOpsNess". Now we will look into what tools and practices can help us to achieve as much as possible.

## have Conway law in mind

That our architecture is just a mirroring of the team structure is a well-known fact. So to create an ideal DevOps environment we should have the capacity to get the ops things we need (server, env variables, services...) as fast as possible. It would be ideal to have an Ops engineer as a part of each team but this is rarely the case. We then should strive to have as many things as developers self-service. Also, we should have the dev work visible to Ops, this can be achieved through participation in agile ceremonies such as standups, demos, and retro.

## Continous integration and deployment

If you should pick one thing from DevOps practices to do, it should be continuous integration and deployment. It avoids hurdle with merge conflicts, automatically runs tests, and enables us to have fast deployment. In the end, it makes the developer's experience much more pleasant.

## Infrastructure as a code

Remember the mean time to recovery metric? IAAC is the key to enabling quickly resolving issues with a faulty environment. Instead of asking around who the hell clicked were in AWS UI you just check the deployed changes in configuration files using git. You can also revet the changes just using the older version of infrastructure. Also, IAAC allows developers to create the environment themselves.

> it is the environment that needs to be in version control the most (DevOps handbook)

## Observability

We should be able to see what happens in the production not only in terms of logs and CPU usage but in terms of business metrics. For example, a low number of logins can indicate performance or UI issues. On top of those metrics, we should strive to have a notification system that pings us when something fishy is going on. All cloud providers nowadays have all kinds of pattern recognition and treshold-based notifications systems so you do not need to figure all this out yourself.

## Definition of done

Traditionally the developer's work ended after the code was in QA. But with short lead time, automated tests, and CI/CD we should expand the definition of done to having our code running in production. This changes the way we think about our work. With being done means running in production we start to create smaller changes that will allow us to shorten the lead time and the dominos start to fall.

## Deployment patterns

In riskier environments, we might not be able to risk that with a developer pushing some code to production our systems stop working. For this case, there are several patterns to rollout changes gradually. For example, with blue/green deployment we will have two environments one with old code and one with the new change. In case of failure, we simply redirect the traffic to the environment with older code. We can also roll out gradually only serving the new code to a small part of customers and gradually increasing the number until we have complete deployment.

## Shadow releases

If you have a big feature to deliver you do not need to wait until everything is set up to go to production. You can start to deploy the feature without it being visible to users. You will make sure that your app is working in production even with new code and enable the feature when ready. This pattern was used by Facebook while releasing the messenger functionality with great success.

## Conclusion

These were a few patterns that can help you with decreasing the lead time and managing deployments. There will always be something that you can do to make your DevOps practices better but with only a small number of changes the developer's experience can be much better and can start much bigger changes.
