---
layout: page
title: Linear Algebra Basics
permalink: /linear-algebra-basics/
---

A simple guide to the linear algebra ideas needed for quantum computing.

## Why linear algebra matters

Quantum states are vectors.
Quantum gates are matrices.
Measurement uses inner products and probabilities.

If you know a few core ideas, quantum concepts become much easier.

## 1) Scalars, vectors, and matrices

- Scalar: a single number (example: 3 or 0.5)
- Vector: an ordered list of numbers
- Matrix: a table of numbers

Example vector:

v = [2, -1]

Example matrix:

A = [[1, 0], [0, -1]]

## 2) Vector length (norm)

For vector v = [a, b], length is:

||v|| = sqrt(a^2 + b^2)

Example:

v = [3, 4] => ||v|| = 5

In quantum computing, state vectors are normalized, so length is 1.

## 3) Dot product and inner product

For real vectors:

u . v = u1*v1 + u2*v2 + ...

Example:

u = [1, 2], v = [3, 4]
u . v = 1*3 + 2*4 = 11

For complex vectors (common in quantum), use conjugate transpose:

<u|v>

This value is used for overlaps and probabilities.

## 4) Basis vectors

A basis is a set of vectors used to represent other vectors.

Standard 2D basis:

- e1 = [1, 0]
- e2 = [0, 1]

Quantum computational basis for one qubit is the same idea:

- |0> = [1, 0]^T
- |1> = [0, 1]^T

## 5) Matrix-vector multiplication

A matrix transforms a vector.

Example:

A = [[1, 2], [0, 1]], x = [3, 4]

Ax = [1*3 + 2*4, 0*3 + 1*4] = [11, 4]

Quantum gates apply this same idea to state vectors.

## 6) Eigenvalues and eigenvectors

An eigenvector of matrix A is a non-zero vector v such that:

Av = lambda v

Where lambda is eigenvalue.

Simple example:

A = [[2, 0], [0, 3]]

- [1, 0] is eigenvector with eigenvalue 2
- [0, 1] is eigenvector with eigenvalue 3

In quantum, measurement outcomes connect to eigenvalues of observable operators.

## 7) Orthogonality

Two vectors are orthogonal if their dot product is 0.

Example:

[1, 0] and [0, 1] are orthogonal.

Orthogonal states are distinguishable in measurement.

## 8) Tensor product (very important)

Tensor product combines systems.

If a = [a1, a2], b = [b1, b2], then:

a (x) b = [a1b1, a1b2, a2b1, a2b2]

Example:

|0> (x) |1> = [1, 0] (x) [0, 1] = [0, 1, 0, 0] = |01>

This is how multi-qubit states are represented.

## 9) Unitary matrices (quantum gates)

A matrix U is unitary if:

U^dagger U = I

Meaning it preserves vector length and is reversible.

All ideal quantum gates are unitary.

Example Hadamard gate:

H = (1/sqrt(2)) * [[1, 1], [1, -1]]

## 10) Quick practice set

1. Normalize vector [1, 1]
2. Compute dot product of [2, -1] and [3, 5]
3. Apply X gate [[0,1],[1,0]] to |0>
4. Compute |0> (x) |0>

## Answers

1. [1/sqrt(2), 1/sqrt(2)]
2. 1
3. |1>
4. |00> = [1, 0, 0, 0]^T

## Next step

Go back to [Quantum Basics](/quantum-basics/) and try re-reading qubit representation using vectors and matrices.
