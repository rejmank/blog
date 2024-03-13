+++ 
title = "Role or Policy?"
author = ["Rejman Jiří"]
tags = ["AWS", "IAM"]
draft = false
+++ 
## Role or Policy? 
The difference between role and policy can be confusing, so this is an attempt to explain it as best I can. Role and policy are not mutually exclusive, they are used together. You can think of the policy as telling you what the role can do, the role as telling you who can fill it and what policies it will have. 
Imagine that the role is a driver. Driver has some things he can do (drive a car up to 8 tons etc.), this is a policy. The role of driver can be taken by anyone with a driving licence. 
## Why use policies?
The question is, why not attach policies directly to users or resources? 
- You do not need to manage long term credentials. For example, if you want to give access to an external person.
-  Grant access to services. For example, you might want to give access to the DB for all AWS lambdas (please do not do this, it is just example :D ). 
   More can be found in [AWS docs](https://aws.amazon.com/iam/features/manage-roles/#:~:text=By%20using%20IAM%20roles%2C%20your,to%20manage%20long%2Dterm%20credentials.)

- [IAM]({{< ref "./iam" >}})
- [Role]({{< ref "./roles" >}})
- [Policies]({{ref "./policy"}})
