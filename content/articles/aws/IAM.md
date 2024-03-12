+++ 
title = "IAM"
author = ["Rejman Jiří"]
tags = ["AWS", "IAM"]
draft = false
+++ 

IAM is an AWS service used for authentication and user management. The basic unit that IAM works with is the user. By default, users have no privileges. A user can be a member of up to 10 groups. Each member of a group inherits the privileges assigned to that group. A privilege is called a policy.

- [Policies]({{<ref "./policy">}})
- [Permission boundaries]({{< ref "./permission-boundaries" >}})
- [Roles]({{< ref "./roles" >}})
- [Security token service]({{<ref "./sts">}})
- [Attribute and Role based control]({{<ref "./attribute-and-role-bc">}})
