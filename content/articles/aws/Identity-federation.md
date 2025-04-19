+++ 
title = "Identity Federation"
author = ["Rejman Jiří"]
tags = ["AWS", "IAM"]
draft = false
+++ 

AWS supports **identity federation with SAML 2.0** This feature enables federated single sign-on (SSO), so users can log in to the AWS Management Console or call the AWS API operations without having to create an IAM user for everyone in your organization. By using SAML, you can simplify the process of configuring federation with AWS because you can use the IdP’s service instead of writing custom identity proxy code.

**OpenID Connect** is an open standard for authentication that is supported by a number of login providers. Amazon Cognito supports the linking of identities with OpenID Connect providers that are configured through AWS Identity and Access Management
![](../../../../../Pasted%20image%2020240416132142.png)