function isPalindrome(n) {
  let s = String(n);
  return s === s.split('').reverse().join('');
}

let N = parseInt(prompt("Enter N:"));
let K = parseInt(prompt("Enter K:"));

let result = -1;
for (let X = 0; X <= 100000; X++) {
  if (isPalindrome(N + X) && (N + X) % K === 0) {
    result = X;
    break;
  }
}

alert(result);