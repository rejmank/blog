+++ 
title = "Network Interfaces"
author = ["Rejman Jiří"]
tags = ["AWS", "EC2", "networking"]
draft = false
+++ 

EC2 instances that need to communicate with the rest of the world use network interfaces to do so. An EC2 instance can have multiple interfaces, and interfaces can change instances. We have three types:

**ENI** - elastic network interface, basic adapter
**ENA** - for advanced networking and latency, the instance type must support it
**EFA** - for high performance computing, can be used with all instance types


- [EC2]({{<ref "./ec2">}})
- [IP types]({{<ref "./ips">}})

