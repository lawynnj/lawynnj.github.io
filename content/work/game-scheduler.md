---
title: Poker Game Scheduler 
date: "2021-01"
slug: "game-scheduler"
selectedWork: true
description: "Create a poll to schedulen a poker game and send email notifications."
previewImage: "/images/work/game-scheduler/600-400.png"
---

> **Role**: System Design, UX Design, Engineering.

## The Problem

A few of friends and I started playing poker regularly, but we were using instagram chats to schedule games... 😅. 

As the organizer of every game I would message a few dates, times and buy-in amounts and get people to like (vote) the options. After everyone voted, I would count and announce the official date, time and buy-in amount and send reminders to the players throughout the week.


> This process became very tedious as we added more options and clearly, it was very repetitive. We needed a better solution.

The first thing that came to mind was using a third-party polling app, but nearly all of the viable options required a paid subscription.
Our requirements (adding options for a date, time, and buy-in and sending e-mails) were minimal and the service offered did not justify the price. 

And for quite a while I had been wanting to learn more about a certain topic.

> What if I could use this as a learning opportunity and develop an app using a microservice architecture? 

I had been keen on learning about microservices for quite a while and decided that I could solve this problem by building a distributed system. 

Having limited experience in this space, I began doing what most people would start with: Research!

## Research

### Requirements
1. Allow an authenticated user to create a poll that contained dates, times, buy-in amounts
2. Allow the user to create a shareable link to sending to players (for voting)
3. Allow anonymous users to vote
4. Allow anonymous users to optionally provide an email for email reminders 
5. Send email notifications to players about the details of the game


### Design and Prototyping

I then began researching AWS resources that would allow me to create an event driven distributed system. The research concluded with the need of the following services:
- Amazon Cognito - an authentication and authorization service
- Lambda - a service that lets us run code without provisioning or managing servers
- Cloud Watch Events - a service that provides "real-time" stream of system events that happen in AWS resources 
- Simple Notification Service - a messaging service for application to application or application to person communication
- Simple Email Service - a service allows us to send emails
- GraphQL - a query langauge for developing APIs 
- DynamoDb - a NoSQL database 
- Amplify - a serverless framework that will help us glue a lot of these services from above (i.e. graphQL API, Cognito, DynamoDB, etc.)


#### Architecture:
There were a few iterations for the design after consulting with some folks over in the Amazon Web Services discord to clarify any issues. 

![Alt Text](/images/work/game-scheduler/architecture-white-bg.png)
