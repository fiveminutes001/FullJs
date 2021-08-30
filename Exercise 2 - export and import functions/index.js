//importing the functions from file "utils1"
const utils1 = require("./utils/utils1.js");
//importing the functions from file "utils2" by destructuring
const { lgNum, cut3 } = require("./utils/utils2.js");

//define arrays
let numArr = [1, 2, 3];

//Arrays aren't passed by reference, apparently
// let numArrCopy = numArr;
// numArrCopy = [1];
// console.log(numArr);
// console.log(numArrCopy);

const wordArr = ["word", "cat", "dog"];

//use functions from utils1
console.log(utils1.sum(numArr));
console.log(utils1.concat(numArr, wordArr));
console.log(utils1.concat2(numArr, wordArr));

//let resultWith3dots = utils1.concat(wordArr);
//let resultWithout3dots = utils1.concat(wordArr);
numArr = [4, 5, 6];
console.log(utils1.concat(numArr, wordArr));
console.log(utils1.concat2(numArr, wordArr));

//use functions from utils2
console.log(lgNum(numArr));
console.log(cut3(wordArr));

// To Complete the Exercise //Original notes
// - Create a utilities folder
// - Separate the functions into two files
// - use module.exports = { function1, function2 } to export the functions.
// - Import the functions into the index.js file using a module name and destructuring. ex: const util = require('utilities/file.js'); or const { function1, function2 } = require('utilities/file.js');
// - Output the results of the functions to console either using the function name if you have used destructuring or moduleName.functionName if you are calling the module.
