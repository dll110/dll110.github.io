---
layout: post
title: some forays around cancer
permalink: /poop/intro_cancer
date: 2023/09/09
published: true
---


A friend recently reached out to ask my thoughts on cancer treatments for a terminally ill family member 'because I know biology'. And I realized that despite all my years in biomedical research, I had very little to say; I know surprisingly little about cancer. I guess it's kind of like asking a software engineer why your computer doesn't work. 

Nonetheless, it's an interesting gap (chasm?) in knowledge, and unsurprising: Off the top of my head, I've only read two books about cancer: "Emperor of All Maladies" and "The Selfish Cell" -- so let's rectify that a bit. 

Some initial gaps in my understanding that seem interesting:
1. why do larger animals not have a higher rate of cancer?
2. pediatric vs adult cancer -- are there trends in how they arise?
3. are there underlying principles regarding the types of cancers that tend to arise from the different tissue/organ systems?
4. how do various cancer treatments purportedly work?
5. immuno-oncology: how much of cancer incidences involve oversight/dysregulation of the immune system? 
6. what can cancer tell you about multicellular self-organization?

I anticipate these being rabbit-holes that don't have obvious endpoints, so I'll artificially constrain it to 'how much I can find out in an arbitrary week' (note: due to procrastination, it turned into two weeks). 


# An initial dive:

## 1. why do larger animals not have a higher rate of cancer?

I've actually come across an answer to this before, but I apparently didn't learn it well because the vague answer in my head doesn't feel fully coherent. It might've been something related to cancer having difficulty taking over the greater mass of a larger organism. (ah, my memory is excellent, it was from an episode of [SciShow](https://www.youtube.com/watch?v=D1HFP84RXak&ab_channel=SciShow), and the concept I'm thinking of is hypertumors --  it seems like it's a controversial hypothesis though.)

This question seems encompassed by [Peto's Paradox](https://en.wikipedia.org/wiki/Peto%27s_paradox), the observation that the incidence of cancer between species doesn't seem to correspond to their number of cells or lifespan.

There's a [decent review](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3060950/) that goes through a good number of hypotheses, mostly to conclude that they haven't been really tested yet so the mechanism is still pretty unknown. But as a sampling:

Hypertumors are a consideration. But they'd expect areas of necrosis, which aren't really seen. 
There may be an evoulationary tradeoff like reduced fertility (evidence?). 
Larger organisms have a lower metabolic rate -- does this lead to lowered free radical damage from oxygen? Or does this create a less competitive environment?
They seem to have increased tumor suppressor genes.

Do whales and elephants have the same or analagous mechanisms?

And if constitutively increasing the expression of tumor antigen TP53 increased suppression ability in mice increased tumor suppression ability, it seemed to also increase their rate of aging -- why is that? It's slightly ironic that aging is associated with increased cancer risk, but increasing tumor suppressing gene expression leads to premature aging (hmm looks like a tradeoff). 


_status: still kind of not sure_


## 2. pediatric vs adult cancer -- are there trends in how they arise?

"Pediatric cancer is a developmental disease" -- in _Origins of Order_, Kauffman suggests considering cancer as a 'disease of differentiation', but when I asked a professor who had thought a lot about the evolution of cancer for her research, she said that the current thought is that cancer is moreso a de novo adaptation than an ataavism towards a more stem-like cell type. But perhaps Kauffman's suggestion may be more true for pediatric cancers (new question: what can they tell us about the origins of new cell types?). Because they are moreso caused by 'disorganization' than adapatation, they have lower mutational burden, though with broader epigenetic dysregulation (and epigenetics are where cell types are distinguished). (Some intriguing bio tidbits I've filed away are the observations that there are some cancers that seem to be [fully epigenetic]() and that it seems possible to take a (specific) cancer and have it functionally integrate with embryonic cells to become a viable organism.) 

This may be associated with the greater incidence of fusion genes, but I don't really have any idea of how fusion genes work right now and why it'd relate to cancer (second new question: are there principles underlying how and which genes can recombine?). 

The most common pediatric cancers are leukemia, central nervous system tumors, neuroblastomas, and teratomas; an underlying trend is that pediatric cancers tend to have a nonepithelial origin, originating from stem or progenitor cells during a particular time window (third question: what makes them diverge in the first place? how does the time window affect their phenotype/prognosis? why did they become cancers and not, say, a conjoined twin?). 

On the other hand, adult cancers are generally of epithelial origin (carcinomas apparently account for 90% of cancers). This seems to be related to the higher turnover in these tissues, as they tend to interface with the environment. The most common adult cancers are in the lung, prostate, breast, colon, and pancreas, and sensibly, lung and colon cancers are associated with environmental stressors -- most lung cancer cases are related to smoking, and most colon cancer cases are preceded by inflammatory gut problems. I am not sure why skin cancers aren't as high up. Instead we have prostate and breast cancer, which can be categorized as the hormonally-driven cancers. And pancreatic cancer, which is just so insidious that despite relatively low incidence, its high mortality puts it up there.

There are different treatment/intervention considerations for pediatric versus adult cancers, particularly given their different etiologies. For neuroblastomas in particular, it is expected that some will [spontaneously regress](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5920563/), and no intervention is needed. And because pediatric cancers tend to arise an earlier developmental time window (as early as !), these cancer cells tend to retain fetus-specific antigens that are (relatively) absent from postnatal tissues, so you can easily target them. 

Pediatric cancers tend to have lower recurrence but have a higher concern for long-term side effects, mostly because they're still developing, but also that their cancers tend to be treated more aggressively (fourth question: why?).

https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6631320/
https://www.annualreviews.org/doi/full/10.1146/annurev-cancerbio-070620-091632

_status: decent broad stroke understanding, but limited second-order understanding_


## 3. are there underlying principles regarding the types of cancers that tend to arise from the different tissue/organ systems?

If you google 'the most common cancers', they tend to list them by organ type, i.e. lung, skin. But for this question I think it's more informative to distinguish them by cell type. 

For example, in adults, the most cancers are epithelial in origin, aka carcinomas. This seems to be due to higher exposure to environmental insults and turnover (the cells that interface with the envrionment are usually epithelial), facilitating greater mutation and adaptation (smoking seems associated with 85% of lung cancer cases). This gives greater opportunity for chronic inflammation, which contributes to the description of tumors as 'wounds that never heal'. This chronic inflammation is bad because it causes oxidate stress and subsequent DNA damage. 

I came across metabolic reprogramming in sepsis, and there's this concept called immune paralysis, where you have both hyperinflammation and immunosuppression. Specifically, the normal state of oxphos is stimulated into aerobic glycolysis through (hyper)inflammation, which leads to the generation of lactic acid, which leads to the next metabolic adaptation to FAO, which corresponds to an immunosuppressive phenotype. "Therefore, limiting the glycolysis pathway can reduce organ damage caused by an “inflammation storm” in the early stage of sepsis." 

In shorthand, immune paralysis: hyperinflammation and immunosuppression
hyperinflammation; oxphos -> aerobic glycolysis -> lactic acid -> immunosuppression (FAO)

I've been exposed to the pH sensor GPR65 which seems to have some role in evoking the inflammatory response. It seems that GPR65 KO mice do better in DSS experiments perhaps because they have a higher inflammatory response at baseline, but worse in sepsis models. Perhaps the inability to sense pH changes alter this metabolic reprogramming trajectory in sepsis, for worse? 

Breast and prostate cancers tend to be 'hormonal' cancers. It seems that it's because they're naturally sensitive to hormones, and hormones can act as growth factors, increasing the rate of cell division. I am not sure why this is a relatively fragile mechanism, in that I'd then expect cancers that are dependent on other growth factors i.e. HGH or IGF. Or what about other conditions that control growth, e.g. diabetes, obesity, other metabolic disorders? It seems that diabetes does increase the risk of cancer (due to what mechanism?), as does obesity, but the mechanism seems to be more related to an increased baseline of chronic inflammation than increased available energy to cells, as I first speculated. 

And that takes us back to chronic inflammation as a foundation for a lot of cancers. I am not sure why this doesn't seem more heavily targeted, especially since cancer and aging are hot fields -- I'm guessing it is not easy to address. Still, that makes my current project seem more well-positioned because failure to return from inflammation seems like a pervasive problem, especially with age. 

A slightly tangential question is what makes certain cancers more deadly? A quick google search gives me 'deadliest cancers/cancers with the lowest survival rate': 
- pancreatic cancer, exocrine (make digestive enzymes) -- hard to detect early, don't respond as well to commonly used therapies, why?
- brain (presuming hard to treat bc of location)
- small cell lung cancer
- mesotheliomas 
- gallbladder
- esophageal

But this made me realize what I meant to ask is 'what makes certain cancers have a more aggressive phenotype?' Being hard to detect and/or hard to treat is orthogonal to this. 

[metabolic reprogramming in sepsis](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10038208/)
https://www.sciencedirect.com/science/article/pii/S2352304221001148

"Therefore, the essence of inflammation-targeting cancer therapy is how to accurately identify the type of inflammation and selectively promote cancer-inhibiting inflammation and inhibit cancer-promoting inflammation."

_status: the main root causes of adult cancers seem to be related to 1) chronic inflammation, and 2) hormones -- they seem worth delving into_


## 4. how do various cancer treatments purportedly work?

The main treatment approaches to cancer seem to be: surgery, chemotherapy, and radiation. Actual treatments seems to often be some combination of them. Somehow, surgery and radiation seems sufficiently self-explanatory so I'll focus on how various chemotherapies work. 

So it seems they largely try to interfere with cell proliferation, whether it be at DNA, RNA, or protein synthesis level.

I guess immunotherapy isn't established enough to make it to standard practice considerations. But I think it is most intriguing. 

Because for all the local inflammation in tumours, in many cases the overall innate immunity of the host is blunted. There seems to be a kind of signalling confusion -- can there be a cytokine/signaling reset like in atrial fibrillation? Not sure if this is an appropriate metaphor. 

And for the rare cases of spontaneous regression, many of them [seem associated with a case of acute infection](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8271173/). How might acute infection affect these variables? Is it related at all to how CAR-T cells work?

Actually, I don't even understand well how CAR-T cells work. This feels slightly embarrassing.  

https://www.ncbi.nlm.nih.gov/books/NBK564367/
https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6721818/

_status: there is a lot more material/depth to go into in this direction; I have a very superficial understanding_


## 5. immuno-oncology: how much of cancer incidences involve oversight/dysregulation of the immune system? and other higher-level regulatory mechanisms (i.e. metabolism?)


So cancers are salient and problematic when we get them, but why do most of us not have cancer, or more often? As I once wondered as a kid, given that there are single-gene diseases, why do we not randomly sprout tumors on our arms?

Our tissues generally have oxygen and nutrient limitations; cancers that are successful tend to acquire the ability to attract blood vessels. This is why most of us who die of old have cancers that won't be the cause of our death; they grow too slowly.

[There's this Science paper](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4471149/) that suggests that cancer-driver-gene mutations are found in normal skin, so their presence is not sufficient to generate cancer. 

The cases of sporadic regression preceded by acute infection suggests that the immune system may be capable of eliminating at least some cancers, given the right impetus. 

The means by which cancer evades the immune system is termed 'immune escape'. Some discussed mechanisms include:
1. loss of antigenicity
2. loss of immunogeneicity
3. immunosuppresive microenvironment (myeloid-derived suppressor cells (MDSCs) and regulatory T cells (Treg) as well as cytokines, and acidic/toxic metabolites that inhibit activity of immune cells)

How might acute infection affect these variables? How do CAR-T cells try to address this? 

Or just generally, how can these be regained? 


https://www.frontiersin.org/articles/10.3389/fimmu.2022.961805/full
https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4334715/


_status: there is something interesting here, but I didn't go into sufficient depth_

## 6. what can cancer tell you about multicellular self-organization?

Mainly, that there are many ways to fail in multicellular self-organization; there seems to be parallels with societal (dys)function. 


Some hallmarks of cancer cells, from an article titled ["How cancer shapes evolution, and how evolution shapes cancer"](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3660034/):
(a) having self-sufficiency in growth signals, 
(b) loss of sensitivity to anti-growth signals, 
(c) loss of sensitivity to programmed cell suicide, 
(d) immortality (cells can divide forever), 
(e) altered metabolic properties, 
(f) higher mutation rates, 
(g) ability to attract blood vessels and (h) the capacity to invade tissues and become metastatic. 

Reading it inversely, this is what evolution has given multicellular organisms a means of higher level control in order to work properly. So to develop a functional tissue, you need to be able to effectively control:

(a) exposure/response to growth signals
(b) anti-growth signals, 
(c) programmed cell suicide, 
(d) immortality, 
(e) metabolic properties, 
(f) determinism/predictability/standardization
(g) resources/nutrients
(h) specialization

Some basic characteristics of cancer that I found interesting:
- loss of density dependent inhibition
- autocrine growth stimulation
- loss of contact inhibition via cell-cell or cell-matrix contact
- defective differentiation

Rabbit-holes that I think have potential to provide insight towards this question:
1. What factors affect tumor maturity? Is there a trend in their trajectory of differentiation and maturity?
2. Why do cancer cells get incentivized towards dedifferentation and the EMT process?
3. What are patterns of hypoxia within the tumor?

_status: not thought about deeply enough_


# Concluding thoughts:

I am now more intrigued by 1) the role and phenomena of chronic inflammation, and 2) how to think about system/'cultural' control of multicellular systems. Though I kind of already thought the latter was interesting; my interest in the former is particularly piqued.

