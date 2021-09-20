---
title: Writing apps for Kubernetes
description: How to write good apps for kubernetes?
date: 2021-09-20T19:00:00.000Z
---
# Writing apps for Kubernetes
*This is an article based on my talk I did at a small internal conference on 17.09.2021. Do not expect a full-fledged article more of a comment for the slides*
When I joined my current team in CN there was a decision to start running part of our solution on a Kubernetes. As I get more involved with DevOps I started to see some mistakes we were doing writing our apps. 

##12-factor apps
First thing you will find when you google something like "how to write good applications for Kubernetes" will be 12-factor apps. It is a collection of best practices developed at Heroku which also applies to k8S. The most important, in my opinion, are: 
	+ **Stateless processes**
			Apps should be written as a stateless process. This allows us to easily scale the apps by simply adding more pods with the app. If we need a state it should be handled by an external service as a Redis.
	+ **Fast to start gracefully to shut down**
			 Pods can die at any time. Because of this, we need to be able to start new apps as fast as possible and also do not drop requests by not using graceful shutdown.
	+ **Logs as a stream of events**
			Application should not care about what is done with logs. It should just throw the log to stdout and do not care anymore. Logs should be handled by something like ELK stack.
	+ **Good handling of configuration**
			Configuration is a complex topic. I would advise you to check resources and find an ideal solution for your use case.
	+ **Scaling via process model**
			The app should be scaled simply by adding more pods. 
	+ **Backing services**
			We should treat everything as a service. We should be able to swap the apps simply by changing settings
	+ **Build, Release, Run**
			Strictly split the phase of build, release, and running. The build is creating the app, the release is pairing the app with config, and the run is the final phase managed by Kubernetes. 
You can dig deeper into the factors at [12factor.net](https://12factor.net/) or check the beyond 12-factor apps book.

## Liveness and readiness probes
When we are developing for Kubernetes we want to know if the app is ready, or the app is ready to start. Both of those should be checked periodically using readiness and liveness probe.

<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vTLmsrz2asQ12o2fHDadHgqZI6-koNFXA2sEqEVn0cS5IH4O4SLSGNALahWD-R8yHiZg84BrRIK7z6W/embed?start=false&loop=false&delayms=60000" frameborder="0" width="960" height="596" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
