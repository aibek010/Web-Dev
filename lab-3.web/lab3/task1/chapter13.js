<<<<<<< HEAD
/**
 * javascript.info - Loops: while and for (Chapter 13)
 * Tasks: last loop value, prefix/postfix while, for loop, even numbers,
 * replace for with while, repeat until correct, output prime numbers
 */

// Task: Last loop value - alerts 3, 2, 1 (last value alerted is 1)
// let i = 3; while (i) { alert(i--); }

// Task: Which values - prefix ++i: 1,2,3,4 | postfix i++: 1,2,3,4,5
// Task: for loop - both show 0,1,2,3,4

// Task: Output even numbers from 2 to 10
function outputEvenNumbers() {
  for (let i = 2; i <= 10; i += 1) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}

// Task: Replace "for" with "while"
function replaceForWithWhile() {
  let i = 0;
  while (i < 3) {
    console.log(`number ${i}!`);
    i += 1;
  }
}

// Task: Repeat until the input is correct
function repeatUntilGreaterThan100() {
  let num;
  do {
    num = prompt('Enter a number greater than 100?', 0);
  } while (num <= 100 && num !== null && num !== '');
}

// Task: Output prime numbers from 2 to n
function outputPrimes(n) {
  nextPrime: for (let i = 2; i <= n; i += 1) {
    for (let j = 2; j < i; j += 1) {
      if (i % j === 0) continue nextPrime;
    }
    console.log(i);
  }
}
=======
/**
 * javascript.info - Loops: while and for (Chapter 13)
 * Tasks: last loop value, prefix/postfix while, for loop, even numbers,
 * replace for with while, repeat until correct, output prime numbers
 */

// Task: Last loop value - alerts 3, 2, 1 (last value alerted is 1)
// let i = 3; while (i) { alert(i--); }

// Task: Which values - prefix ++i: 1,2,3,4 | postfix i++: 1,2,3,4,5
// Task: for loop - both show 0,1,2,3,4

// Task: Output even numbers from 2 to 10
function outputEvenNumbers() {
  for (let i = 2; i <= 10; i += 1) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}

// Task: Replace "for" with "while"
function replaceForWithWhile() {
  let i = 0;
  while (i < 3) {
    console.log(`number ${i}!`);
    i += 1;
  }
}

// Task: Repeat until the input is correct
function repeatUntilGreaterThan100() {
  let num;
  do {
    num = prompt('Enter a number greater than 100?', 0);
  } while (num <= 100 && num !== null && num !== '');
}

// Task: Output prime numbers from 2 to n
function outputPrimes(n) {
  nextPrime: for (let i = 2; i <= n; i += 1) {
    for (let j = 2; j < i; j += 1) {
      if (i % j === 0) continue nextPrime;
    }
    console.log(i);
  }
}
>>>>>>> b759ac797edf622f9a625a67796b3388bcbbe1dd
