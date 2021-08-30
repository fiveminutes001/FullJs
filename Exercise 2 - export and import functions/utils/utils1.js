// Add numbers in an array

const sum = (arr) => {
	let total = 0;
	arr.forEach((x) => {
		total += x;
	});
	return total;
};

// Concatenate two arrays //... generates a copy of the array. Without it it would have been passed by reference.
//Passes elements of the array
const concat = (arr1, arr2) => {
	return [...arr1, ...arr2];
};

// Concatenate two arrays by reference
//Passes the arrays themselves
const concat2 = (arr1, arr2) => {
	return [arr1, arr2];
};

//now we'll export the functions in ES5 format
module.exports = {
	sum,
	concat,
	concat2,
};

//in ES6 format
// export default {
// 	sum,
// 	concat,
// 	concat2,
// };
