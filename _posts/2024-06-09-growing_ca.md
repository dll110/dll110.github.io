---
layout: post
title: growing neural cellular automata; embryology and mech interp
permalink: /poop/developmentally
date: 2024/06/09
date_updated: 2024/12/29
published: false
---

In the days I was young, I came across (a friend was like 'I think you'll like this') ["Growing Neural Cellular Automata"](https://distill.pub/2020/growing-ca/), where they trained a neural network to learn cellular automata type rules to self-organize into a target image. I thought it was a cool parallel to the type of phenomena I wanted to understand about biology, so I poked around the code they provided to try to get a sense of the rules the neural network learned. So arguably, the first time I did mech interp was in early 2021, before it became a[salient topic](https://dll110.github.io/poop/trying_mi). 

It seems self-explanatory in its interestingness, but in case you're unfamiliar with these parts and want a tour guide, here is how I was primed:

A recurring question in biomedical research, and especially salient in longevity research, is 'why do we get disease? why do we age?' why do we not maintain homeostasis?

There were the error models of aging, but that felt uncompelling -- it's not like it doesn't know how to take out the trash -- the question is, why does it not? 


But after seeing this video, it felt like something clicked, and I thought this framework sat much better (I resonate with the aside in "A thousand brains"). 
The loss applied after a certain time point analogizes to being reproductively fit: 
[insert video]

So you can think of post-training period as the post-reproductive years, where the instability could correspond to how we see the increased prevalence of disease with age. 
[insert video]

While the model misses a lot of real world context i.e. variations of envrionmental perturbation, I think it better illustrated for me that there is a space of statistical functions that would satisfy the starting point to target point mapping, but relatively few may have additional characteristics that we want i.e. stability, regeneration, resistance to novel perturbations. I think it gives a broad stroke idea of why we see the spread that we see in phenotype.  

And you can also see how some patterns are more or less stable than others -- this feels relevant to how we ask why certain organisms like planaria can regenerate, why lobsters or seagulls don't seem to age, and I don't expect their means of achieving such properties will necessarily apply to us, because what comes for free/more easily is different. i.e. being warm-blooded seems to make functional immortality inherently more difficult. It feels adjacent to how some thing are more/less elegantly expressed in one language vs another, and I wonder if body plans/physiology templates are similar; inherently, some problems are harder/easier to solve.


--- 


This article caught me at a time when I was trying figure out how to think about aging and making prediction models. An issue in biology is that we often would like to predict how the system will go (i.e. predicitng risk of morbidity or mortality), but sometimes you're just given a single snapshot, so you're trying to estimate dynamics from a single state. And my intuition built from calculus and nyquist sampling theorem says that's not enough to narrow down the model space. 

In high school, after discovering "Mutants", I thought my calling was in human biology and bought a bunch of of anatomy and physiology books with Christmas Barnes and Noble gift cards -- and subsequently didn't read them; they were kind of boring. 

In "A mind at play", on the life of Claude Shannon, “The real measure of information is not in the symbols we send -- it’s in the symbols we could have sent, but did not” (133). My hypothesis is that the domain of pathology is more compelling because it hints at the possibility space that we don't (often) see -- what you see is not all there is, but why? 

Textbooks on anatomy and physiology don't really give you a picture of why you are mostly fine, until you are not. 



predicting where something will go



Are we trying to control the system by changing the state/values, or by changing the rules?

It is the rules that give you the self-regulating properties of regeneration. 

Changing the rules seems much more robust if you can get it right, but my impression is that we don't have great tools for predicting how we should change the rules. 


hopfield networks; error correction and attractors


I think I was primed to find it compelling because I was working with epigenetic clocks at the time, and epigenetics seems to correspond heavily to cell phenotype (e.g. senescent and cancerous cells, which also increase with age), so I had been contemplating a cellular automata model of of tissue, and whether we could train neural networks to learn the rules of how a cell responds to its environment, like the rules of cellular automata, etc etc...

## why the paper is cool

somehow, the visualization of training a cell to learn rules and generate a target image, which was stable for some time, but became unstable with time, was a valuable intuition for explaining my qualms about current theories of aging.

Of the space of possible functions/rules that fit the constraints (here, needing to hit a target image after some period of time -- what happens if you train it to hit it faster vs slower?), some are more stable after than others.

It looks like aging comes for free.

homeostasis (a stable image) is not a stable system

growth is not maintenance

some target images are more stable than others,  for free. 

adding noise/perturbations to increase robustness;
making it more robust as canalization/error correction 


this property is also target image-specific. It is evocative of planaria, who people hail as the model organism of regeneration, with hopes we might discover its secrets -- what if its secret is being a simple enough pattern to efficiency create redundancy for?

## my first attempt at mech interp

I wanted to know what changed in the rules to make the image more robust.

So instead of doing my research work, I ran PCA on the channels and colored the top PCs:

[video]

I think the result reminds me of embryology, where establishing polarity (i.e. dorsal/ventral) is a fundamental step; it establishes a relative map for cells to know where they should be.   

[image of drosophila axes]

I'm supported by Waddington, of the famed Waddington landscape, who writes in 'Principles of Development' that aging is extended development.

So I thought this was cool, but maybe obvious in retrospect. 

And then I didn't continue much further after I realized that this model lacked characteristics of the type of system I find interesting -- here, the individual cells aren't 'selfish', so there isn't the tension of local versus global optimization; the cells aren't 'trying' to be selfish. Perhaps this might be a good metaphor for pediatric cancers, but less so of adult cancers (see post: ['some nosing around cancer'](https://dll110.github.io/poop/intro_cancer)). And I wondered if this was a toy model for how ML could help us understand biology, e.g. if we gave it the starting state and end state, could the rules that it learned helps us understand the rules that are followed in biology? 



