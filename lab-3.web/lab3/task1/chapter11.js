/**
 * javascript.info - Logical operators (Chapter 11)
 * Tasks: OR/AND results, check range, check login
 */

// Task: What's the result of OR? → 2
// alert(null || 2 || undefined);

// Task: What's the result of OR'ed alerts? → 1, then 2
// alert(alert(1) || 2 || alert(3));

// Task: What is the result of AND? → null
// alert(1 && null && 2);

// Task: What is the result of AND'ed alerts? → 1, then undefined
// alert(alert(1) && alert(2));

// Task: The result of OR AND OR → 3
// alert(null || 2 && 3 || 4);

// Task: Check the range between (14 and 90 inclusively)
function isAgeInRange(age) {
  return age >= 14 && age <= 90;
}

// Task: Check the range outside (NOT between 14 and 90)
function isAgeOutsideRange1(age) {
  return !(age >= 14 && age <= 90);
}
function isAgeOutsideRange2(age) {
  return age < 14 || age > 90;
}

// Task: Check the login
function checkLogin() {
  const userName = prompt("Who's there?", '');
  if (userName === 'Admin') {
    const pass = prompt('Password?', '');
    if (pass === 'TheMaster') {
      alert('Welcome!');
    } else if (pass === '' || pass === null) {
      alert('Canceled');
    } else {
      alert('Wrong password');
    }
  } else if (userName === '' || userName === null) {
    alert('Canceled');
  } else {
    alert("I don't know you");
  }
}
