+++
title = "EC2"
author = ["Rejman Jiří"]
tags = ["AWS", "EC2"]
draft = false
+++

EC2 is a service that provides servers for rent. We can choose from Linux, Windows and even MacOs servers. Each EC2 instance has a type that determines how powerful the instance is and what load it will best support (standard, compute...). AWS provides a number of images (ami) that we can use as a base image, or we can provide our own, or even create a snapshot and use it as an ami to spin the next server. If we need to do something when the server starts, it can be specified in **user data**. User data is a script that runs when the server starts.


- [Lighstail]({{<ref "./lightsail">}})
- [Pricing models]({{<ref "./ec2pricing">}})
- [Batch]({{<ref "./batch">}})
- [Network Interfaces]({{<ref "./network-interfaces">}})
- [IP Types]({{<ref "./ips">}})
