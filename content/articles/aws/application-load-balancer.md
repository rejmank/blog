+++ 
title = "Application Load Balancer"
author = ["Rejman Jiří"]
tags = ["AWS", "EC2", "ELB"]
draft = false
+++ 

## Application load balancer
Works on layer 7, routes to IP addresses, lambdas and containers. We can assign a security group to it. It routes to a target group either by path, based on url or host which is based on a host field in the header of http requests. 

- [Load Balancer]({{<ref "./load-balancer>"}})
- [EC2]({{<ref "./ec2">}})

