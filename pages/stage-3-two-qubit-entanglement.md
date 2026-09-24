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

## Big Idea (Easy English)

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

## Visual: entanglement network perspective

<section class="stage-visual" aria-label="Entanglement links">
	<h4>RELATIONSHIP VIEW</h4>
	<div class="entangle-grid">
		<div class="entangle-node">|00></div>
		<div class="entangle-node">|11></div>
		<div class="entangle-node">|01></div>
		<div class="entangle-node">|10></div>
	</div>
	<div class="entangle-links">
		<p class="entangle-link">Separable case: outcomes can be described as independent parts.</p>
		<p class="entangle-link">Entangled case: one compact rule describes joint behavior across both qubits.</p>
	</div>
</section>

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

<section class="quiz-box" data-component="mini-quiz" data-quiz-id="stage-3">
	<div class="quiz-q" data-quiz-question="q1" data-answer="C">
		<p>1. Two qubits have how many basis states?</p>
		<div class="quiz-options">
			<label class="quiz-option"><input type="radio" name="stage3-q1" value="A"> A) 2</label>
			<label class="quiz-option"><input type="radio" name="stage3-q1" value="B"> B) 3</label>
			<label class="quiz-option"><input type="radio" name="stage3-q1" value="C"> C) 4</label>
		</div>
	</div>

	<div class="quiz-q" data-quiz-question="q2" data-answer="B">
		<p>2. Entanglement means:</p>
		<div class="quiz-options">
			<label class="quiz-option"><input type="radio" name="stage3-q2" value="A"> A) each qubit is always independent</label>
			<label class="quiz-option"><input type="radio" name="stage3-q2" value="B"> B) combined state may not be separable</label>
			<label class="quiz-option"><input type="radio" name="stage3-q2" value="C"> C) no measurement is possible</label>
		</div>
	</div>

	<div class="quiz-q" data-quiz-question="q3" data-answer="A">
		<p>3. Tensor product is used to:</p>
		<div class="quiz-options">
			<label class="quiz-option"><input type="radio" name="stage3-q3" value="A"> A) combine subsystem state spaces</label>
			<label class="quiz-option"><input type="radio" name="stage3-q3" value="B"> B) reduce qubit count</label>
			<label class="quiz-option"><input type="radio" name="stage3-q3" value="C"> C) remove measurement randomness</label>
		</div>
	</div>

	<div class="quiz-actions">
		<button type="button" class="quiz-submit" data-role="quiz-submit">SUBMIT QUIZ</button>
		<button type="button" class="quiz-reset" data-role="quiz-reset">RESET</button>
		<span class="quiz-score" data-role="quiz-score">Score: -</span>
	</div>

	<div class="quiz-reveal" data-role="quiz-reveal" hidden>
		<h4>REVEAL ANSWERS</h4>
		<ol>
			<li>C</li>
			<li>B</li>
			<li>A</li>
		</ol>
	</div>
</section>

## Next

Move to [Stage 4 - Circuits and Basic Algorithms](/learn/stage-4-circuits-and-algorithms/).
