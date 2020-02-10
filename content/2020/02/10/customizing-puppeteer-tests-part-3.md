---
template: post
title: 'Customizing Puppeteer Tests: Part 3'
slug: customizing-your-puppeteer-tests-part-3
socialImage: /media/puppeteer-3_h.jpg
draft: false
date: 2018-08-30T18:39:40.816Z
description: >
  Today, we are going to work on customizing tests by passing in custom
  parameters.
category: Tutorials
tags:
  - Popular
---
> ## Reasons for Custom Parameters
>
> We need to be able to pass in custom parameters for debugging and local testing. Our tests currently run through Travis CI, but if a developer needs to run the tests locally, the options are not exactly the same.
>
> * The URL for the test will be different
> * The developer usually needs to debug the tests to determine why they failed
>
> We implemented three custom parameters to help with this problem:
>
> 1. Ability to pass in a custom URL
> 2. Ability to run Chrome in a non-headless state
> 3. Ability to have screenshots taken of failing tests
>
> We are going to go through all of these custom parameters and learn how to implement them.

[Read my latest article on Outside](https://www.outsideonline.com/2340631/customizing-your-puppeteer-tests-part-3)
