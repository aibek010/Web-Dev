/**
 * javascript.info - Array methods (Data Types section)
 * Tasks: camelize, filter range, filter range in place, sort decreasing,
 * copy and sort, Map to names, Sort users by age, Get average age, etc.
 */

// Task: Translate border-left-width to borderLeftWidth (camelize)
function camelize(str) {
  return str
    .split('-')
    .map((word, index) => (index === 0 ? word : word[0].toUpperCase() + word.slice(1)))
    .join('');
}

// Task: Filter range - return new array with a <= item <= b
function filterRange(arr, a, b) {
  return arr.filter((item) => item >= a && item <= b);
}

// Task: Filter range in place - modify array, remove outside [a, b]
function filterRangeInPlace(arr, a, b) {
  for (let i = arr.length - 1; i >= 0; i -= 1) {
    if (arr[i] < a || arr[i] > b) arr.splice(i, 1);
  }
}

// Task: Sort in decreasing order
function sortDecreasing(arr) {
  arr.sort((a, b) => b - a);
}

// Task: Copy and sort array (don't modify original)
function copySorted(arr) {
  return arr.slice().sort();
}

// Task: Map to names (array of user objects -> array of names)
function mapToNames(users) {
  return users.map((user) => user.name);
}

// Task: Sort users by age
function sortByAge(users) {
  users.sort((a, b) => a.age - b.age);
}

// Task: Get average age
function getAverageAge(users) {
  return users.reduce((sum, user) => sum + user.age, 0) / users.length;
}

// Task: Filter unique array members
function unique(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}
