---
title: Poker Game Scheduler 
date: "2021-01"
slug: "game-scheduler"
selectedWork: true
description: "Create a poll to schedule a poker game and send email notifications."
previewImage: "./images/work/game-scheduler/600-400.png"
githubLink: "https://github.com/lawynnj/game-scheduler"
websiteLink: "https://master.d1qe36p76mm37c.amplifyapp.com/"
---

> **Role**: System Design, Engineering.

## The Problem

A few of friends and I started playing poker regularly, but we were using Instagram chats to schedule games (I know, not the greatest idea). 

As the organizer of every game I would message a few dates, times and buy-in amounts and get people to like (vote) the options. Once everyone voted, I would count and announce the official date, time and buy-in amount and send reminders to the players throughout the week.


> This process became very tedious as we added more options and it was very repetitive. We needed a better solution.

The first conclusion was to use a third-party polling app, but nearly all of the viable options required a paid subscription.
Our requirements (adding options for a date, time, and buy-in and sending e-mails) were minimal and did not justify paying for the pricey services. 


This lead to my next conclusion.

> What if I could use this as a learning opportunity and develop an app that incorporates a microservice architecture? 

I have been keen on learning about microservices for quite a while and decided that this was a good opportunity to build a distributed system. 


It was time to start digging in so I began doing what most people would start with: Research! 

> ## TLDR:
> Problem: Scheduling poker games with friends via Instagram chats is very inefficient.  
> Solution: Let's create our own polling app that employs a microservice architecture! 

## Goal

Allow a user to create a poll that has options for dates, times and buy-in amounts and automatically remind participants through email notifications.
## Research

### Requirements

1. Allow users to create an account and log in
2. Allow an authenticated user to create a poll with date, time and buy-in amount options
3. Allow the user to create a shareable link to send to players (for voting)
4. Allow anonymous users to vote
5. Allow anonymous users to optionally provide an email for notifications 
6. Send email notifications to players about the details of the game (i.e. one email for when the voting is finalized and another on the day of the game)


### Design and Prototyping
After some research, I concluded that the following AWS resources will be required:
- Amazon Cognito - an authentication and authorization service
- Lambda - a service that lets us run code without provisioning or managing servers
- Cloud Watch Events - a service that provides "real-time" stream of system events that happen in AWS resources 
- Simple Notification Service - a messaging service for application to application or application to person communication
- Simple Email Service - a service allows us to send emails
- GraphQL - a query langauge for developing APIs 
- DynamoDb - a NoSQL database 
- Amplify - a serverless framework that will help us glue these services together 

## Back-end Architecture:
I created a few iterations of the system architecture diagram and had some folks over in the Amazon Web Services discord server look over it. 

![Alt Text](/images/work/game-scheduler/architecture-white-bg.png)




## Low Fidelity Prototypes 

![Alt Text](/images/work/game-scheduler/lf-1.jpg)
![Alt Text](/images/work/game-scheduler/lf-2.jpg)
![Alt Text](/images/work/game-scheduler/lf-3.jpg)
