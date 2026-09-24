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

## Big Idea (Easy English)

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

## Visual: gate storyboard perspective

<section class="stage-visual" aria-label="Gate storyboard">
	<h4>STATE STORYBOARD</h4>
	<div class="gate-strip">
		<div class="gate-strip-row">
			<span class="gate-pill">|0></span>
			<span class="gate-pill">H</span>
			<span class="gate-pill">Z</span>
			<span class="gate-pill">H</span>
		</div>
		<p class="gate-note">Read left to right: start state, gate action, gate action, final pre-measurement state.</p>
	</div>
</section>

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

<section class="quiz-box" data-component="mini-quiz" data-quiz-id="stage-2">
	<div class="quiz-q" data-quiz-question="q1" data-answer="B">
		<p>1. A gate does what?</p>
		<div class="quiz-options">
			<label class="quiz-option"><input type="radio" name="stage2-q1" value="A"> A) stores data in RAM</label>
			<label class="quiz-option"><input type="radio" name="stage2-q1" value="B"> B) transforms the current quantum state</label>
			<label class="quiz-option"><input type="radio" name="stage2-q1" value="C"> C) removes noise automatically</label>
		</div>
	</div>

	<div class="quiz-q" data-quiz-question="q2" data-answer="C">
		<p>2. Which statement is true?</p>
		<div class="quiz-options">
			<label class="quiz-option"><input type="radio" name="stage2-q2" value="A"> A) gate order never matters</label>
			<label class="quiz-option"><input type="radio" name="stage2-q2" value="B"> B) only final gate matters</label>
			<label class="quiz-option"><input type="radio" name="stage2-q2" value="C"> C) sequence of gates determines final state</label>
		</div>
	</div>

	<div class="quiz-q" data-quiz-question="q3" data-answer="B">
		<p>3. Which gate is known for creating equal superposition from <code>|0></code>?</p>
		<div class="quiz-options">
			<label class="quiz-option"><input type="radio" name="stage2-q3" value="A"> A) X</label>
			<label class="quiz-option"><input type="radio" name="stage2-q3" value="B"> B) H</label>
			<label class="quiz-option"><input type="radio" name="stage2-q3" value="C"> C) Z</label>
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
			<li>B</li>
			<li>C</li>
			<li>B</li>
		</ol>
	</div>
</section>

## Next

Move to [Stage 3 - Two Qubits and Entanglement](/learn/stage-3-two-qubit-entanglement/).
