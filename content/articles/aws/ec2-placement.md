+++
title = "EC2 Placement"
author = ["Rejman Jiří"]
tags = ["AWS", "EC2"]
draft = false
+++

In order to achieve better resilience, or latency we can use placement groups. To get better latency we can use **cluster** placement.
To improve resilience we can use **partition** which prevents instances to use the same hardware. To get both we can use **spread**, which spreads groups of instances across separated hardware. 

- [ec2]({{< ref "./ec2">}})