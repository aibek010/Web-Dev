<<<<<<< HEAD
/**
 * javascript.info - Basic operators, maths (Chapter 8)
 * Task 1: The postfix and prefix forms
 * Task 2: Assignment result
 * Task 3: Type conversions (expressions)
 * Task 4: Fix the addition
 */

// Task 1: Postfix and prefix - final values: a=2, b=2, c=2, d=1
let a = 1;
let b = 1;
const c = ++a;
const d = b++;
console.log({ a, b, c, d });

// Task 2: Assignment result - a=4, x=5
let e = 2;
const x = 1 + (e *= 2);
console.log({ e, x });

// Task 3: Type conversions (answers for reference)
// "" + 1 + 0 = "10"
// "" - 1 + 0 = -1
// true + false = 1
// 6 / "3" = 2
// "2" * "3" = 6
// 4 + 5 + "px" = "9px"
// "$" + 4 + 5 = "$45"
// "4" - 2 = 2
// "4px" - 2 = NaN
// "  -9  " + 5 = "  -9  5"
// "  -9  " - 5 = -14
// null + 1 = 1
// undefined + 1 = NaN
// " \t \n" - 2 = -2

// Task 4: Fix the addition - convert prompt result to number
const first = +prompt('First number?', 1);
const second = +prompt('Second number?', 2);
alert(first + second); // 3
=======
/**
 * javascript.info - Basic operators, maths (Chapter 8)
 * Task 1: The postfix and prefix forms
 * Task 2: Assignment result
 * Task 3: Type conversions (expressions)
 * Task 4: Fix the addition
 */

// Task 1: Postfix and prefix - final values: a=2, b=2, c=2, d=1
let a = 1;
let b = 1;
const c = ++a;
const d = b++;
console.log({ a, b, c, d });

// Task 2: Assignment result - a=4, x=5
let e = 2;
const x = 1 + (e *= 2);
console.log({ e, x });

// Task 3: Type conversions (answers for reference)
// "" + 1 + 0 = "10"
// "" - 1 + 0 = -1
// true + false = 1
// 6 / "3" = 2
// "2" * "3" = 6
// 4 + 5 + "px" = "9px"
// "$" + 4 + 5 = "$45"
// "4" - 2 = 2
// "4px" - 2 = NaN
// "  -9  " + 5 = "  -9  5"
// "  -9  " - 5 = -14
// null + 1 = 1
// undefined + 1 = NaN
// " \t \n" - 2 = -2

// Task 4: Fix the addition - convert prompt result to number
const first = +prompt('First number?', 1);
const second = +prompt('Second number?', 2);
alert(first + second); // 3
>>>>>>> b759ac797edf622f9a625a67796b3388bcbbe1dd
