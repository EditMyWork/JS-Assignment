function isPalindrome(n) {
  let original = n;
  let reversed = 0;
  while (n > 0) {
    reversed = reversed * 10 + (n % 10);
    n = Math.floor(n / 10);
  }
  return original === reversed;
}

let N = Number(prompt("Enter N:"));
let K = Number(prompt("Enter K:"));

let result = -1;

for (let X = 0; X <= 100000; X++) {
  if (isPalindrome(N + X) === true && (N + X) % K === 0) {
    result = X;
    break; 
  }
}

alert(result);