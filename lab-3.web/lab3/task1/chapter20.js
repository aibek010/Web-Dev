/**
 * javascript.info - Numbers (Data Types section)
 * Tasks: Sum numbers, 6.35.toFixed, readNumber, infinite loop, random min-max, randomInteger
 */

// Task: Sum numbers from the visitor
function sumFromVisitor() {
  const first = +prompt('The first number?', '');
  const second = +prompt('The second number?', '');
  alert(first + second);
}

// Task: Why 6.35.toFixed(1) == 6.3? - Round 6.35 the right way
function roundSixPoint35() {
  return Math.round(6.35 * 10) / 10; // 6.4
}

// Task: Repeat until the input is a number
function readNumber() {
  let num;
  do {
    num = prompt('Enter a number please?', 0);
  } while (!isFinite(num));
  if (num === null || num === '') return null;
  return +num;
}

// Task: An occasional infinite loop - i += 0.2 never equals 10 exactly (precision)

// Task: A random number from min to max (floating-point, max not included)
function random(min, max) {
  return min + Math.random() * (max - min);
}

// Task: A random integer from min to max (both inclusive)
function randomInteger(min, max) {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}
