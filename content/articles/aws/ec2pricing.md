+++ 
title = "EC2 Pricing models"
author = ["Rejman Jiří"]
tags = ["AWS", "EC2"]
draft = false
+++ 

## Pricing modes


AWS have a number of ways to rent the servers, which vary in price.  

**On Demand** - basic, we just spin up a server and it runs until we stop it. This is also the most expensive.

**Reserve** - We can reserve some capacity for 1 or 3 years. This can result in a discount of up to 75%. The discount will be applied if the attributes of instance size, availability zone, tenancy and operating system match the specification of the reserved instance. We can have either a convertible or standard reserve instance. The difference is that for standard we can only change instance size and networking, for convertible we can also change operating system and tenancy. 

**Spot Instances** - Spot Instances use free capacity from aws. It is a cheap option to run applications that can be terminated at any time as we have no guarantee that the instance will run. If it is terminated, we will be notified 2 minutes before it is shut down. 


**Dedicated Instance**- If we need physical isolation of the HW, we can use a dedicated instance. Note that applications in our account can share the HW. We pay by the time the application is running, but by the instance. When we shut down the instance, it can start on completely different hardware, but it will still be dedicated.

**Dedicated Host** - physical server for our use only, similar to a dedicated instance but with the same hardware each time the server restarts. 

What is the difference between dedicated instance and dedicated host? : host have always the same HW, instance only tells us that hw will be dedicated to us. #flashcard 

**Savings Plans** - We do not buy instances themselves, but capacity that we will use, 


- [EC2]({{<ref "./ec2">}})

