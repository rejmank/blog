+++ 
title = "Load Balancers"
author = ["Rejman Jiří"]
tags = ["AWS", "EC2", "ELB"]
draft = false
+++ 
## Network load balancer
Works on layer 4 of the tcp/udp stack. It supports TCP, TLS, UDP and TCP_UDP protocols. It is used primary for performance critical workloads. We cannot assign it security group. But it can be used to whitelist IPs.

- [Load Balancer]({{<ref "./load-balancer">}})
- [EC2]({{<ref "./ec2">}})

