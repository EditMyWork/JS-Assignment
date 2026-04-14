function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++)
    if (n % i === 0) return false;
  return true;
}

function digitSum(n) {
  return String(n).split('').reduce((s, d) => s + Number(d), 0);
}

function hasZero(n) {
  return String(n).includes('0');
}

let L = parseInt(prompt("Enter L:"));
let R = parseInt(prompt("Enter R:"));
let K = parseInt(prompt("Enter K:"));

let count = 0;
for (let x = L; x <= R; x++) {
  if (x % K === 0 && !hasZero(x) && isPrime(digitSum(x)))
    count++;
}

alert(count);