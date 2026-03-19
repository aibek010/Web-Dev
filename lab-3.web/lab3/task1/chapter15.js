<<<<<<< HEAD
/**
 * javascript.info - Functions (Chapter 15)
 * Tasks: Is "else" required?, Rewrite with ?/||, min(a,b), pow(x,n)
 */

// Task: Is "else" required? - No difference in behavior

// Task: Rewrite using ? or ||
function checkAgeQuestion(age) {
  return (age > 18) ? true : confirm('Did parents allow you?');
}
function checkAgeOr(age) {
  return (age > 18) || confirm('Did parents allow you?');
}

// Task: Function min(a, b)
function min(a, b) {
  return a < b ? a : b;
}

// Task: Function pow(x, n)
function pow(x, n) {
  let result = x;
  for (let i = 1; i < n; i += 1) {
    result *= x;
  }
  return result;
}

// Example usage with prompt (for web page):
// let x = prompt('x?', '');
// let n = prompt('n?', '');
// if (n >= 1) { alert(pow(x, n)); } else { alert('Use a positive integer'); }
=======
/**
 * javascript.info - Functions (Chapter 15)
 * Tasks: Is "else" required?, Rewrite with ?/||, min(a,b), pow(x,n)
 */

// Task: Is "else" required? - No difference in behavior

// Task: Rewrite using ? or ||
function checkAgeQuestion(age) {
  return (age > 18) ? true : confirm('Did parents allow you?');
}
function checkAgeOr(age) {
  return (age > 18) || confirm('Did parents allow you?');
}

// Task: Function min(a, b)
function min(a, b) {
  return a < b ? a : b;
}

// Task: Function pow(x, n)
function pow(x, n) {
  let result = x;
  for (let i = 1; i < n; i += 1) {
    result *= x;
  }
  return result;
}

// Example usage with prompt (for web page):
// let x = prompt('x?', '');
// let n = prompt('n?', '');
// if (n >= 1) { alert(pow(x, n)); } else { alert('Use a positive integer'); }
>>>>>>> b759ac797edf622f9a625a67796b3388bcbbe1dd
