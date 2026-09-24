---
layout: learning
title: Stage 2 - Gate Operations on State Vectors
permalink: /learn/stage-2-gate-operations/
kicker: DEEP DIVE
subtitle: Understand how quantum gates transform state vectors and why gate order matters.
topic: STAGE 2
reading_time: 14 MIN
next_page: /learn/stage-3-two-qubit-entanglement/
next_label: STAGE 3 - TWO QUBITS AND ENTANGLEMENT
---

In this stage, you learn to think in transformations.
A gate is an operation that changes your current state to a new state.

## Big idea in simple English

- State vector = where your qubit is now.
- Gate = action applied to that state.
- New state = result after action.

If you chain gates, each one receives the output of the previous one.
That is why gate order matters.

## Core gates to know first

- X gate: flips basis states (`|0>` <-> `|1>`)
- H gate: creates balanced superposition from `|0>`
- Z gate: changes phase on `|1>`

Simple flow example:

1. start in `|0>`
2. apply H
3. apply Z
4. apply H again
5. measure

The probabilities you get at the end depend on the whole sequence, not one gate alone.

## Visual: vector transform intuition

{% include learning-components/vector-transform.html %}

How to read this visual:

1. Think of the pink vector as your input.
2. Matrix choice is like gate choice.
3. Cyan vector is the transformed output.

## Why this matters for circuits

A circuit is a list of transformations.
To design a good circuit, you should predict how each gate changes the state.

If you only memorize symbols, it feels random.
If you understand vector updates, circuits become logical.

## Exercises

1. If you apply X to `|0>`, what output basis state do you expect?
2. Why can H be used before measurement in many algorithms?
3. Explain in one sentence why gate order matters.

## Mini Quiz

1. A gate does what?
A) stores data in RAM
B) transforms the current quantum state
C) removes noise automatically

2. Which statement is true?
A) gate order never matters
B) only final gate matters
C) sequence of gates determines final state

3. Which gate is known for creating equal superposition from `|0>`?
A) X
B) H
C) Z

### Quiz answers

1. B
2. C
3. B

## Next

Move to [Stage 3 - Two Qubits and Entanglement](/learn/stage-3-two-qubit-entanglement/).
