---
layout: learning
title: Quantum Basics
permalink: /quantum-basics/
kicker: FOUNDATION TRACK
subtitle: Learn qubits with visual intuition first, then map every idea to the math form you will use in circuits.
topic: QUANTUM
reading_time: 12 MIN
next_page: /linear-algebra-basics/
next_label: LINEAR ALGEBRA BASICS
---

A beginner-friendly guide to quantum computing fundamentals.

<div class="viz-grid">
	<div class="viz-card">
		<h4>BIT</h4>
		<p>Classical bit chooses one state: 0 or 1.</p>
	</div>
	<div class="viz-card">
		<h4>QUBIT</h4>
		<p>Qubit evolves across amplitudes until measured.</p>
	</div>
	<div class="viz-card">
		<h4>MEASUREMENT</h4>
		<p>Probabilities become a single classical outcome.</p>
	</div>
</div>

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

- `|0>`
- `|1>`

A general qubit state is written as:

```text
|psi> = alpha|0> + beta|1>
```

Where:

- alpha and beta are complex numbers called amplitudes
- `|alpha|^2` is probability of measuring 0
- `|beta|^2` is probability of measuring 1
- `|alpha|^2 + |beta|^2 = 1`

<div class="viz-grid">
	<div class="viz-card">
		<h4>ALPHA</h4>
		<p>Amplitude on `|0>`, controls probability for 0.</p>
	</div>
	<div class="viz-card">
		<h4>BETA</h4>
		<p>Amplitude on `|1>`, controls probability for 1.</p>
	</div>
	<div class="viz-card">
		<h4>NORMALIZATION</h4>
		<p>Total probability must stay exactly 1.</p>
	</div>
</div>

{% include learning-components/qubit-measurement.html %}

## How to represent a qubit

### 1) Algebraic form

```text
|psi> = alpha|0> + beta|1>
```

Example:

```text
|psi> = (1/sqrt(2))|0> + (1/sqrt(2))|1>
```

This gives 50 percent chance of 0 and 50 percent chance of 1 when measured.

### 2) Vector form

```text
|0> = [1, 0]^T
|1> = [0, 1]^T
```

So:

```text
|psi> = [alpha, beta]^T
```

Example:

```text
|psi> = [1/sqrt(2), 1/sqrt(2)]^T
```

### 3) Bloch sphere intuition

Any single-qubit pure state can be viewed as a point on a sphere:

- North pole is |0>
- South pole is |1>
- Points in between are superpositions

This is a geometric picture that helps build intuition.

{% include learning-components/bloch-sphere.html %}

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

1. Start in `|0>`
2. Apply H gate
3. State becomes `(|0> + |1>)/sqrt(2)`
4. Measure to get 0 or 1 with equal probability

<div class="viz-grid">
	<div class="viz-card">
		<h4>X GATE</h4>
		<p>Bit-flip action: `|0>` to `|1>`, `|1>` to `|0>`.</p>
	</div>
	<div class="viz-card">
		<h4>H GATE</h4>
		<p>Creates balanced superposition from a basis state.</p>
	</div>
	<div class="viz-card">
		<h4>Z GATE</h4>
		<p>Leaves 0 unchanged, rotates phase on 1.</p>
	</div>
</div>

## Two-qubit glimpse: entanglement

With two qubits, some states cannot be separated into independent single-qubit states.
These are entangled states.

Example Bell state:

(|00> + |11>)/sqrt(2)

If you measure one qubit and get 0, the other will be 0.
If you measure one and get 1, the other will be 1.

{% include learning-components/tensor-map.html %}

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
