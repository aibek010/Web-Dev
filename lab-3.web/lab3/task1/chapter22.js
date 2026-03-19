/**
 * javascript.info - Arrays (Data Types section)
 * Tasks: Is array copied?, Array operations, Calling in array context,
 * Sum input numbers, A maximal subarray
 */

// Task: Is array copied? - fruits.length is 4 (same reference)

// Task: Array operations (styles)
function arrayOperations() {
  const styles = ['Jazz', 'Blues'];
  styles.push('Rock-n-Roll');
  styles[Math.floor((styles.length - 1) / 2)] = 'Classics';
  const first = styles.shift();
  console.log(first); // Jazz
  styles.unshift('Rap', 'Reggae');
  return styles; // ['Rap', 'Reggae', 'Classics', 'Rock-n-Roll']
}

// Task: arr[2]() - calls function, this is the array

// Task: Sum input numbers
function sumInput() {
  const numbers = [];
  while (true) {
    const value = prompt('A number please?', 0);
    if (value === '' || value === null || !isFinite(value)) break;
    numbers.push(+value);
  }
  let sum = 0;
  for (const number of numbers) {
    sum += number;
  }
  return sum;
}

// Task: A maximal subarray (Kadane's algorithm - O(n))
function getMaxSubSum(arr) {
  let maxSum = 0;
  let partialSum = 0;
  for (const item of arr) {
    partialSum += item;
    maxSum = Math.max(maxSum, partialSum);
    if (partialSum < 0) partialSum = 0;
  }
  return maxSum;
}
