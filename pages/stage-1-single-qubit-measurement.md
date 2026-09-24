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

## Big Idea (Easy English)

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

## Visual 3: same idea from a probability meter view

<section class="stage-visual" aria-label="Probability meter">
	<h4>PROBABILITY METER SNAPSHOT</h4>
	<div class="state-meter">
		<div class="state-meter-row">
			<span>State A</span>
			<div class="state-meter-fill"><b style="width:72%"></b></div>
			<em>P(0)=0.72</em>
		</div>
		<div class="state-meter-row">
			<span>State B</span>
			<div class="state-meter-fill"><b style="width:48%"></b></div>
			<em>P(0)=0.48</em>
		</div>
		<div class="state-meter-row">
			<span>State C</span>
			<div class="state-meter-fill"><b style="width:21%"></b></div>
			<em>P(0)=0.21</em>
		</div>
	</div>
</section>

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

<section class="quiz-box" data-component="mini-quiz" data-quiz-id="stage-1">
	<div class="quiz-q" data-quiz-question="q1" data-answer="B">
		<p>1. A qubit in superposition gives what at measurement time?</p>
		<div class="quiz-options">
			<label class="quiz-option"><input type="radio" name="stage1-q1" value="A"> A) both 0 and 1</label>
			<label class="quiz-option"><input type="radio" name="stage1-q1" value="B"> B) a single outcome, 0 or 1</label>
			<label class="quiz-option"><input type="radio" name="stage1-q1" value="C"> C) no outcome</label>
		</div>
	</div>

	<div class="quiz-q" data-quiz-question="q2" data-answer="C">
		<p>2. Which equation must always hold for one qubit?</p>
		<div class="quiz-options">
			<label class="quiz-option"><input type="radio" name="stage1-q2" value="A"> A) <code>alpha + beta = 1</code></label>
			<label class="quiz-option"><input type="radio" name="stage1-q2" value="B"> B) <code>|alpha| + |beta| = 1</code></label>
			<label class="quiz-option"><input type="radio" name="stage1-q2" value="C"> C) <code>|alpha|^2 + |beta|^2 = 1</code></label>
		</div>
	</div>

	<div class="quiz-q" data-quiz-question="q3" data-answer="A">
		<p>3. The Bloch sphere mainly helps with:</p>
		<div class="quiz-options">
			<label class="quiz-option"><input type="radio" name="stage1-q3" value="A"> A) visual intuition</label>
			<label class="quiz-option"><input type="radio" name="stage1-q3" value="B"> B) file storage</label>
			<label class="quiz-option"><input type="radio" name="stage1-q3" value="C"> C) circuit compilation</label>
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
			<li>A</li>
		</ol>
	</div>
</section>

## Next

Move to [Stage 2 - Gate Operations](/learn/stage-2-gate-operations/).
