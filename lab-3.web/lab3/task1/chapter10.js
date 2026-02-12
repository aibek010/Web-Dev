/**
 * javascript.info - Conditional branching: if, '?' (Chapter 10)
 * Tasks: if string zero, name of JavaScript, show sign, rewrite if/else to ?
 */

// Task: if ("0") - Yes, alert will be shown (non-empty string is truthy)

// Task: The name of JavaScript
function checkJavaScriptName() {
  const value = prompt('What is the "official" name of JavaScript?', '');
  if (value === 'ECMAScript') {
    alert('Right!');
  } else {
    alert("You don't know? ECMAScript!");
  }
}

// Task: Show the sign
function showSign() {
  const value = prompt('Type a number', 0);
  if (value > 0) {
    alert(1);
  } else if (value < 0) {
    alert(-1);
  } else {
    alert(0);
  }
}

// Task: Rewrite 'if' into '?'
function resultBelowOver(a, b) {
  const result = (a + b < 4) ? 'Below' : 'Over';
  return result;
}

// Task: Rewrite 'if..else' into multiple '?'
function getMessage(login) {
  const message = (login === 'Employee') ? 'Hello'
    : (login === 'Director') ? 'Greetings'
      : (login === '') ? 'No login'
        : '';
  return message;
}
