---
layout: page
title: Quantum Basics
permalink: /quantum-basics/
---

A beginner-friendly guide to quantum computing fundamentals.

## What is quantum computing?

Classical computers store information as bits: 0 or 1.
Quantum computers store information as qubits, which can be in a combination of 0 and 1 until measured.

Quantum computing is useful for certain problem types, such as:

- Simulation of quantum systems (chemistry and materials)
- Optimization with special structure
- Some cryptography and number-theory related tasks

It is not a replacement for all classical computing.

## Core words and pronunciation

- Qubit: pronounce as "cue-bit"
- Superposition: pronounce as "soo-per-puh-ZIH-shun"
- Entanglement: pronounce as "en-TANG-gul-ment"
- Interference: pronounce as "in-ter-FEER-ens"
- Decoherence: pronounce as "dee-koh-HEER-ens"

## Qubit basics

A qubit has two basis states:

- |0>
- |1>

A general qubit state is written as:

|psi> = alpha|0> + beta|1>

Where:

- alpha and beta are complex numbers called amplitudes
- |alpha|^2 is probability of measuring 0
- |beta|^2 is probability of measuring 1
- |alpha|^2 + |beta|^2 = 1

## How to represent a qubit

### 1) Algebraic form

|psi> = alpha|0> + beta|1>

Example:

|psi> = (1/sqrt(2))|0> + (1/sqrt(2))|1>

This gives 50 percent chance of 0 and 50 percent chance of 1 when measured.

### 2) Vector form

|0> = [1, 0]^T
|1> = [0, 1]^T

So:

|psi> = [alpha, beta]^T

Example:

|psi> = [1/sqrt(2), 1/sqrt(2)]^T

### 3) Bloch sphere intuition

Any single-qubit pure state can be viewed as a point on a sphere:

- North pole is |0>
- South pole is |1>
- Points in between are superpositions

This is a geometric picture that helps build intuition.

## Measurement in simple terms

Measurement converts the qubit state into a classical bit outcome:

- Outcome 0 with probability |alpha|^2
- Outcome 1 with probability |beta|^2

After measurement, the state collapses to the observed basis state.

## Gates: the basic operations

Quantum gates are reversible operations on qubits.

Important single-qubit gates:

- X gate: flips |0> and |1> (like NOT)
- H gate (Hadamard): creates equal superposition from |0>
- Z gate: changes phase of |1>

Example sequence:

1. Start in |0>
2. Apply H gate
3. State becomes (|0> + |1>)/sqrt(2)
4. Measure to get 0 or 1 with equal probability

## Two-qubit glimpse: entanglement

With two qubits, some states cannot be separated into independent single-qubit states.
These are entangled states.

Example Bell state:

(|00> + |11>)/sqrt(2)

If you measure one qubit and get 0, the other will be 0.
If you measure one and get 1, the other will be 1.

## Common beginner mistakes

- Thinking superposition means both results are observed at once in a measurement
- Ignoring complex phase (phase affects interference)
- Assuming quantum is always faster for every task

## A quick learning path

1. Learn single qubit states and measurement
2. Practice gate operations on state vectors
3. Study 2-qubit systems and entanglement
4. Learn circuits and basic algorithms (Deutsch-Jozsa, Grover, QFT)

## Next step

Continue with [Linear Algebra Basics](/linear-algebra-basics/) because linear algebra is the language of quantum computing.
