---
layout: learning
title: Stage 4 - Circuits and Basic Algorithms
permalink: /learn/stage-4-circuits-and-algorithms/
kicker: DEEP DIVE
subtitle: Put everything together in circuit flow and understand three foundational algorithm patterns.
topic: STAGE 4
reading_time: 16 MIN
next_page: /quantum-learning-path/
next_label: BACK TO LEARNING PATH
---

This stage combines all previous stages into algorithm-level thinking.

## Big idea in simple English

A quantum algorithm is a designed sequence of gates.
You shape amplitudes, phases, and correlations so measurement is likely to produce useful results.

Think of it as:

- Stage 1 gave you measurement intuition.
- Stage 2 gave you gate transformation intuition.
- Stage 3 gave you multi-qubit and entanglement intuition.
- Stage 4 uses all of them together.

## Three starter algorithm patterns

### Deutsch-Jozsa

Goal: decide if an oracle function is constant or balanced with strong efficiency.
Learning value: introduces oracle-style circuit reasoning.

### Grover

Goal: increase probability of target answer in an unstructured search space.
Learning value: teaches amplitude amplification loops.

### QFT (Quantum Fourier Transform)

Goal: transform amplitude/phase structure into frequency-like representation.
Learning value: opens door to phase-based algorithm intuition.

## Visual: algorithm circuit map

{% include learning-components/algorithm-circuit-map.html %}

How to read this visual:

1. Left block: prepare and query pattern.
2. Middle block: iterative amplification pattern.
3. Right block: phase-transform pattern.

## Practical mindset for beginners

Do not try to memorize full formal derivations immediately.
Start by identifying algorithm pattern:

- prepare
- transform
- interfere
- measure

Once pattern is clear, deeper math becomes easier to absorb.

## Exercises

1. In one line, explain Grover's high-level trick.
2. Why is phase important in QFT-style circuits?
3. Which earlier stage helps most when reading multi-qubit circuits, and why?

## Mini Quiz

1. Grover is known for:
A) amplitude amplification
B) classical sorting
C) reducing qubit count

2. Deutsch-Jozsa primarily teaches:
A) oracle-based algorithm structure
B) quantum error correction
C) hardware calibration

3. QFT is most connected to:
A) phase and frequency structure
B) memory allocation
C) network routing

### Quiz answers

1. A
2. A
3. A

## Next

Return to [Quantum Learning Path](/quantum-learning-path/) and continue with implementation notes or deeper math.
