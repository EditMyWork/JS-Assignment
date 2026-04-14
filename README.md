# JS-Assignment

## Q1 – Digit Gatekeeper
Loop from L to R, check divisibility by K, no zero digit, digit sum is prime.
**Complexity:** O((R-L) * log10(R))

## Q2 – Roll-Seed Lock
Apply 3 transformation steps, then check range and middle digit.
**Complexity:** O(1)

## Q3 – Mirror Corridor
Increment X from 0, check palindrome + divisibility.
**Complexity:** O(100000 * digits)

## Q4 – Fare Calculator
Apply fare rules sequentially, then ceil to multiple of 5.
**Complexity:** O(1)

## Q5 – Skipping Numbers
Accumulate sum skipping multiples of (seed+2) until sum >= N.
**Complexity:** O(m) where m is the answer

## Q6 – Contest Score Judge
Compute score formula, apply clamping and total check.
**Complexity:** O(1)