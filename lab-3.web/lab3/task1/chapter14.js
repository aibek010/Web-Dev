<<<<<<< HEAD
/**
 * javascript.info - The "switch" statement (Chapter 14)
 * Task 1: Rewrite the "switch" into an "if"
 * Task 2: Rewrite "if" into "switch"
 */

// Task 1: Rewrite switch into if
function browserCheckIf(browser) {
  if (browser === 'Edge') {
    alert("You've got the Edge!");
  } else if (browser === 'Chrome' || browser === 'Firefox'
    || browser === 'Safari' || browser === 'Opera') {
    alert('Okay we support these browsers too');
  } else {
    alert('We hope that this page looks ok!');
  }
}

// Task 2: Rewrite if into switch
function rewriteIfToSwitch() {
  const a = +prompt('a?', '');
  switch (a) {
    case 0:
      alert(0);
      break;
    case 1:
      alert(1);
      break;
    case 2:
    case 3:
      alert('2,3');
      break;
    default:
      break;
  }
}
=======
/**
 * javascript.info - The "switch" statement (Chapter 14)
 * Task 1: Rewrite the "switch" into an "if"
 * Task 2: Rewrite "if" into "switch"
 */

// Task 1: Rewrite switch into if
function browserCheckIf(browser) {
  if (browser === 'Edge') {
    alert("You've got the Edge!");
  } else if (browser === 'Chrome' || browser === 'Firefox'
    || browser === 'Safari' || browser === 'Opera') {
    alert('Okay we support these browsers too');
  } else {
    alert('We hope that this page looks ok!');
  }
}

// Task 2: Rewrite if into switch
function rewriteIfToSwitch() {
  const a = +prompt('a?', '');
  switch (a) {
    case 0:
      alert(0);
      break;
    case 1:
      alert(1);
      break;
    case 2:
    case 3:
      alert('2,3');
      break;
    default:
      break;
  }
}
>>>>>>> b759ac797edf622f9a625a67796b3388bcbbe1dd
