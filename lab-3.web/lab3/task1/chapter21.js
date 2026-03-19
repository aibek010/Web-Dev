<<<<<<< HEAD
/**
 * javascript.info - Strings (Data Types section)
 * Tasks: ucFirst, checkSpam, truncate, extractCurrencyValue
 */

// Task: Uppercase the first character
function ucFirst(str) {
  if (!str) return str;
  return str[0].toUpperCase() + str.slice(1);
}

// Task: Check for spam (case-insensitive: 'viagra' or 'XXX')
function checkSpam(str) {
  const lowerStr = str.toLowerCase();
  return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}

// Task: Truncate the text with ellipsis
function truncate(str, maxlength) {
  return (str.length > maxlength)
    ? str.slice(0, maxlength - 1) + '…'
    : str;
}

// Task: Extract the money (e.g. "$120" -> 120)
function extractCurrencyValue(str) {
  return +str.slice(1);
}
=======
/**
 * javascript.info - Strings (Data Types section)
 * Tasks: ucFirst, checkSpam, truncate, extractCurrencyValue
 */

// Task: Uppercase the first character
function ucFirst(str) {
  if (!str) return str;
  return str[0].toUpperCase() + str.slice(1);
}

// Task: Check for spam (case-insensitive: 'viagra' or 'XXX')
function checkSpam(str) {
  const lowerStr = str.toLowerCase();
  return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}

// Task: Truncate the text with ellipsis
function truncate(str, maxlength) {
  return (str.length > maxlength)
    ? str.slice(0, maxlength - 1) + '…'
    : str;
}

// Task: Extract the money (e.g. "$120" -> 120)
function extractCurrencyValue(str) {
  return +str.slice(1);
}
>>>>>>> b759ac797edf622f9a625a67796b3388bcbbe1dd
