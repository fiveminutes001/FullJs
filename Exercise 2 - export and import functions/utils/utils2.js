// Find the largest number in an array
const lgNum = (arr) => {
	let largest = 0;
	arr.forEach((x) => {
		if (x > largest) {
			largest = x;
		}
	});
	return largest;
};

// Remove the 3rd item from an array
const cut3 = (arr) => {
	arr.splice(2, 1);
	return arr;
};

//now we'll export the functions
module.exports = {
	lgNum,
	cut3,
};

//in ES6 format
// export default {
// lgNum,
// cut3,
// };
