let a = Number(prompt("Enter correct answers:"));
let b = Number(prompt("Enter partial answers:"));
let c = Number(prompt("Enter wrong answers:"));

let score = 3 * a + b - 2 * c;

if (score < 0) {
  score = 0;
}

if (a + b + c > 50) {
  score = score - 10;
}
    
if (score < 0) {
  score = 0;
}

if (score >= 60) {
  alert(score + ", PASS");
} else {
  alert(score + ", FAIL");
}