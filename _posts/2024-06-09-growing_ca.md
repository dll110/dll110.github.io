---
layout: post
title: growing neural cellular automata; embryology and mech interp
permalink: /poop/developmentally
date: 2024/06/09
date_updated: 2024/12/29
published: false
---

_2022/06/09_

In the days I was young, when I was working in the biology of aging and before mech interp became a salient topic, I came across ["Growing Neural Cellular Automata"](https://distill.pub/2020/growing-ca/)
So arguably, the first time I did mech interp was in 2021, when it was not yet cool. 

I think I was primed to find it compelling because I was working on epigenetic clocks, and epigenetics seems to correspond heavily to cell phenotype (e.g. senescent and cancerous cells, which also increase with age), so I had been contemplating a cellular automata model of of tissue, and was wondering about how to understand the game theory of it, etc etc...
do they respond to each other differently? learning the rules of 

## why the paper is cool

somehow, the visualization of training a cell to learn rules and generate a target image, which was stable for some time, but became unstable with time, was a valuable intuition for explaining my qualms about current theories of aging.

Of the space of possible functions/rules that fit the constraints (here, needing to hit a target image after some period of time -- what happens if you train it to hit it faster vs slower?), some are more stable after than others.

It looks like aging comes for free.

homeostasis (a stable image) is not a stable system

growth is not maintenance

adding noise/perturbations to increase robustness;
making it more robust as canalization/error correction 


this property is also target image-specific. It is evocative of planaria, who people hail as the model organism of regeneration, with hopes we might discover its secrets -- what if its secret is being a simple enough pattern to efficiency create redundancy for?

## my first attempt at mech interp

I wanted to know what changed in the rules to make the image more robust.

So I ran PCA on the channels and colored the top PCS.

I think the result reminds me of embryology, where establishing polarity (i.e. dorsal/ventral) is a fundamental step; it establishes a relative map for cells to know where they should be.   

I had been reading Waddington, who frames aging as extended development.

dead systems when looking at values?

I guess the common trend is losing interest when I realize that the system is lacking characteristics of the type of system I find interesting -- here, the individual cells aren't 'selfish', so there isn't the tension of local versus global optimization. I guess this might be a good metaphor for pediatric cancers, but less so of adult cancers. 