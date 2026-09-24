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

## Big Idea (Easy English)

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

<section class="quiz-box" data-component="mini-quiz" data-quiz-id="stage-4">
	<div class="quiz-q" data-quiz-question="q1" data-answer="A">
		<p>1. Grover is known for:</p>
		<div class="quiz-options">
			<label class="quiz-option"><input type="radio" name="stage4-q1" value="A"> A) amplitude amplification</label>
			<label class="quiz-option"><input type="radio" name="stage4-q1" value="B"> B) classical sorting</label>
			<label class="quiz-option"><input type="radio" name="stage4-q1" value="C"> C) reducing qubit count</label>
		</div>
	</div>

	<div class="quiz-q" data-quiz-question="q2" data-answer="A">
		<p>2. Deutsch-Jozsa primarily teaches:</p>
		<div class="quiz-options">
			<label class="quiz-option"><input type="radio" name="stage4-q2" value="A"> A) oracle-based algorithm structure</label>
			<label class="quiz-option"><input type="radio" name="stage4-q2" value="B"> B) quantum error correction</label>
			<label class="quiz-option"><input type="radio" name="stage4-q2" value="C"> C) hardware calibration</label>
		</div>
	</div>

	<div class="quiz-q" data-quiz-question="q3" data-answer="A">
		<p>3. QFT is most connected to:</p>
		<div class="quiz-options">
			<label class="quiz-option"><input type="radio" name="stage4-q3" value="A"> A) phase and frequency structure</label>
			<label class="quiz-option"><input type="radio" name="stage4-q3" value="B"> B) memory allocation</label>
			<label class="quiz-option"><input type="radio" name="stage4-q3" value="C"> C) network routing</label>
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
			<li>A</li>
			<li>A</li>
			<li>A</li>
		</ol>
	</div>
</section>

## Next

Return to [Quantum Learning Path](/quantum-learning-path/) and continue with implementation notes or deeper math.
