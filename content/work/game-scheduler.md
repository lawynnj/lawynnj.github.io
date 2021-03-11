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
Researching Amazon web services that will help us build a distributed system.

#### Framework
Amplify. 
Why amplify? It has some handy features out of the box:  
- request and response validation is built in with GraphQL.
- automated documentation
- ease of integration with a database (DynamoDB)
- ease of extending functionality outside of the framework (i.e. connecting the GraphQL API to lambdas)

#### Authentication:
AWS Cognito User Pools. It seamlessly integrates with Amplify and will handle the bulk of user creation and authentication.

#### Database:
DynamoDB: why was the dynamodb a good candidate for the app?

#### Extended Functionality:
Lambda. Heavily supported, supported out of the box by amplify. Use lambdas to process email notifications.

#### Architecture:
*Image of the architecture*
![Alt Text](/images/work/game-scheduler/architecture.png)