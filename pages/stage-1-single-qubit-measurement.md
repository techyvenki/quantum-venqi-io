---
layout: learning
title: Stage 1 - Single Qubit and Measurement
permalink: /learn/stage-1-single-qubit-measurement/
kicker: DEEP DIVE
subtitle: Build strong intuition for one qubit, probabilities, and what measurement really means.
topic: STAGE 1
reading_time: 12 MIN
next_page: /learn/stage-2-gate-operations/
next_label: STAGE 2 - GATE OPERATIONS
---

This lesson is your foundation. If Stage 1 is clear, all later stages become easier.

## Big idea in simple English

A qubit is not just 0 or 1 before you measure it.
It stores a probability pattern that can become 0 or 1 when measured.

Think of it like this:

- Before measuring: you have a recipe of chances.
- After measuring: you get one final cooked result.

The goal in quantum computing is to shape this chance recipe before measurement.

## State representation you should recognize

A one-qubit state is often written as:

```text
|psi> = alpha|0> + beta|1>
```

Meaning:

- `|alpha|^2` is chance of measuring 0
- `|beta|^2` is chance of measuring 1
- total chance must be 1

```text
|alpha|^2 + |beta|^2 = 1
```

## Visual 1: probability movement

{% include learning-components/qubit-measurement.html %}

How to read this visual:

1. Move theta slowly.
2. Watch how P(0) and P(1) change together.
3. Notice one goes up while the other goes down.

## Visual 2: Bloch sphere intuition

{% include learning-components/bloch-sphere.html %}

How to read this visual:

1. The point/vector moves smoothly before measurement.
2. That motion represents changing amplitudes and phase.
3. Measurement will still end in a basis outcome (0 or 1).

## Common mistakes in Stage 1

- Thinking superposition means you can read both 0 and 1 at once.
- Ignoring normalization.
- Assuming probability is the same as phase.

## Exercises

1. Write a valid qubit state where chance of 0 is 0.25.
2. If `|alpha|^2 = 0.8`, what is `|beta|^2`?
3. Why does a quantum algorithm care about probabilities before measurement?

## Mini Quiz

1. A qubit in superposition gives what at measurement time?
A) both 0 and 1
B) a single outcome, 0 or 1
C) no outcome

2. Which equation must always hold for one qubit?
A) `alpha + beta = 1`
B) `|alpha| + |beta| = 1`
C) `|alpha|^2 + |beta|^2 = 1`

3. The Bloch sphere mainly helps with:
A) visual intuition
B) file storage
C) circuit compilation

### Quiz answers

1. B
2. C
3. A

## Next

Move to [Stage 2 - Gate Operations](/learn/stage-2-gate-operations/).
