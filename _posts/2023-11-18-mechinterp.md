---
layout: post
title: some initial thoughts around mech interp
permalink: /poop/trying_mi
date: 2023/11/18
date_updated: 2023/12/06
published: true
---

When I brought up the idea that i was considering a pivot into mech interp, my closest friends were baffled. It seemed like quite the nonsequitor, even flighty, said one friend. Which was surprising for me, because the connection seemed obvious, but then again, I tend to model the outside perspective poorly. Another of those friends had previously said that it took time to learn that my seemingly random tangents are usually not actually random, it's just that I tend to explain the connection poorly. 

So here is a somewhat scattered attempt to explain the potential relations between my more established interests and mech interp.

Perhaps my most public interest is in the biomedical sciences, as that's what's most legible in my career path. But I suspect what I like in biology is highly specific, and it does not include being in nature or benchwork. I guess it leans more theoretical, which is why I like evolutionary biology. I like Rosen's framing of it, with biology as 'anticipatory systems', or systems that anticipate their future environment and state, and try to best position themselves given that anticipation. In this framing, you can think of more intelligent systems as those that can anticipate a further time horizon. And evolution can be thought of an exploration of algorithms that persist. 

There's also the claim that "novelty comes from constraint" that I came across in some theoretical biology writings that's been niggling for a number of years now. My model of what it means to understand something is to constrain/resolve the possibility space, so that there is less uncertainty/more (shannon) information of how to navigate the conceptual space effectively. And that's typically how I operate, via constraints as opposed to working with a concrete model, which is how some friends describe how they work. The developer of wavefunction collapse commented that they initially tried an implemention of belief propagation, but found that constraint propagation worked better. This may be coincidence. Or not. I think there's something relevant there to how a trained neural network/transformer works. Neural networks as supposedly universal function approximators (according fast.ai, I believe), and in MacKay's "Information Theory, Inference, and Learning Algorithms", he suggests that 'data modeling is data compression'.

Speaking more on constraint, I recently read "A Thousand Brains" by Jeff Hawkins, where there is an aside to explain why the author thinks he can be relatively confident about a theory without doing confirmatory experiments -- I find it a relatable explanation to how I operate, which is where you collect a lot of observations, especially seemingly paradoxical ones ('constraints'), so that you develop a hyperparametric constraint on what a good answer looks like. With more constraints, there are relatively fewer explanations that can fit them all. So when you see one that can fits them all, it is very unusual and notable. 

So having read a decent amount of interesting theoretical frameworks about complex systems, especially biological ones, I've been on the lookout for good opportunities to try to develope better intuitions about them. And I guess this is why this arguably isn't my first time around, as I tried to dissect Growing Neural Cellular Automata towards the end of 2020, where I found axis orientation in its first PCs (seems obvious in retrospect, but reminded me of embryology and Hox genes) but got distracted with graduate work and was sad that each 'cell' was not selfish. 

So this seemed like an unusually good fit given these various considerations. A short list of some things I've found interesting so far:
- the phenomena of backup heads, copy suppression, self-repair (resilience, redundancy, constraint)
- training dynamics; what is the process of learning; the phenomena of grokking (embryology and developing, evolution)
- I am not excited by SAEs for some reason. My post-hoc rationalization is that it is a tool to understand what's going on with these models, but is not really a self-organizing phenomena of these machine learning models themself, and I am more intrigued by questions around the fundamental behavior/principles of how and what these architectures self-organize information. So it's interesting as a tool to help answer these questions, but is not really interesting as a main object/question of focus. E.g. I expect I'd develop interest if it seems like it can help me understand the above phenomena. 

I'm a bit too lazy right now to make these associations explicit, but I'm writing this down to messily gesture to these intuitions (and invest in a future opportunity to be self-satisfied). And I guess we'll see how far this'll go?

---

Bonus: ["Is mech interp useful?"](https://www.lesswrong.com/posts/tEPHGZAb63dfq2v8n/how-useful-is-mechanistic-interpretability)

I'm rather surprised that people question this because it is a _lot_ more theoretically tractable than biology; I'd say the main difference is that biology has had much more time to establish itself. My impression is that mech interp is _easier_ than biology, and because biology is accepted as useful despite its logistically difficulties, there's no clear reason to me that mech interp can't get there. 

>A high level concern here is that there might be a lot of neurons which look roughly like french neurons and they can't all be doing the same thing.

I'm reminded of "A thousand brains"'s metaphor of how it's a group of people who know how a city's water system works, that one person does not know all the details on their own, and there is overlapping knowledge such that if one or several people call out sick, the system will not immediately fail. And then in this metaphor, are there useful questions that can then be translated back to a mech interp context? 

>Current work seems very far from being useful (it isn't currently useful) or explaining much what's going on inside of models in key cases. But it's hard to be very confident that a new field won't work! And things can be far from useful, but become useful via slowly becoming more powerful, etc.

This a weird take in my opinion, because this is the character of basic research. I'm obviously biased, but this feels like an overconfidence on known knowns and unknowns, and not enough of what is unknown. This guy sounds like a habitual exploiter, and not familiar with exploratory heuristics. Perhaps an anology would be that this is a similar difference to how a clinician and scientist approach biomedical questions. He is rather top down, interested in applications (AI safety, which I do not yet know how to muster any care about), whereas scientists tend to be more bottom up. 

>Do models plan?

I am very interested in planning by means of the afoementioned anticipatory systems. However, as a first impression, I am not confident it has sufficient ability in that direction for me to be interested in doing a serious dive on it. I associate planning with exploration of counterfactuals, and I am not aware of a mechanism by which LLMs can do thhis. I would guess it would need a 'meta-loop' of modeling its options and a higher-level optimization goal. 


