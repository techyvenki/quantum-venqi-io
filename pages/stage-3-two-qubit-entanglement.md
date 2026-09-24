---
layout: learning
title: Stage 3 - Two Qubits and Entanglement
permalink: /learn/stage-3-two-qubit-entanglement/
kicker: DEEP DIVE
subtitle: Move from one-qubit intuition to two-qubit systems, tensor products, and entanglement.
topic: STAGE 3
reading_time: 14 MIN
next_page: /learn/stage-4-circuits-and-algorithms/
next_label: STAGE 4 - CIRCUITS AND ALGORITHMS
---

Now we step into multi-qubit thinking.
This is where quantum behavior becomes more interesting.

## Big idea in simple English

With two qubits, you do not just track two separate values.
You track one combined state space:

- `|00>`
- `|01>`
- `|10>`
- `|11>`

Some combined states are separable.
Some are entangled, meaning you cannot split them into independent single-qubit states.

## What entanglement means practically

Entangled qubits show linked outcomes.
When measured, one result gives information about the other.

Important: this is correlation structure in the quantum state.
It does not mean classical copying or faster-than-light messaging.

## Visual: tensor mapping

{% include learning-components/tensor-map.html %}

How to read this visual:

1. Pick first qubit basis value.
2. Pick second qubit basis value.
3. See mapped joint basis output row.

This builds your intuition for tensor-product indexing.

## Why Stage 3 matters

Most meaningful quantum workloads rely on interactions across many qubits.
Entanglement and multi-qubit structure are key resources for those workloads.

If Stage 3 clicks, algorithm design in Stage 4 becomes easier to understand.

## Exercises

1. Write all basis states for 2 qubits.
2. In your own words, what makes an entangled state different from a separable one?
3. Why does state size grow quickly with more qubits?

## Mini Quiz

1. Two qubits have how many basis states?
A) 2
B) 3
C) 4

2. Entanglement means:
A) each qubit is always independent
B) combined state may not be separable
C) no measurement is possible

3. Tensor product is used to:
A) combine subsystem state spaces
B) reduce qubit count
C) remove measurement randomness

### Quiz answers

1. C
2. B
3. A

## Next

Move to [Stage 4 - Circuits and Basic Algorithms](/learn/stage-4-circuits-and-algorithms/).
