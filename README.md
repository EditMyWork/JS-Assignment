# JS-Assignment

## Q1 – Digit Gatekeeper
Loop from L to R. For each number check three things:
divisible by K, no zero digit, and digit sum is prime.
Used a while loop to get digits one by one using % and Math.floor.
Complexity: O(R - L)

## Q2 – Roll-Seed Lock
Apply the even/odd rule 3 times using a for loop.
Then check if result is between 100-999 and middle digit equals seed.
Complexity: O(1)

## Q3 – Mirror Corridor
Loop X from 0 to 100000. Check if N+X is palindrome and divisible by K.
Built the reversed number using % and Math.floor without string methods.
Complexity: O(100000)

## Q4 – Fare Calculator
Apply each fare rule one by one using if/else.
Used % 5 to manually round up to nearest multiple of 5.
Complexity: O(1)

## Q5 – Skipping Numbers
Keep adding numbers to sum, skip ones divisible by (seed+2).
Stop when sum reaches N.
Complexity: O(m)

## Q6 – Contest Score Judge
Calculate score with formula, clamp to 0 if negative,
subtract 10 if total questions exceed 50, then check PASS or FAIL.
Complexity: O(1)