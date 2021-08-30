const fs = require("fs");

process.on("beforeExit", () => {
	console.log("Print Fifth");
});

fs.readFile(__filename, () => {
	// check phase
	setImmediate(() => {
		console.log("Print Third");
	});
});

fs.readFile(__filename, () => {
	// end poll phase
	process.nextTick(() => {
		console.log("Print Second");
	});
});

// end mainline / pre timers phase 1
process.nextTick(() => {
	console.log("Print First");
});

// timers phase 4
setTimeout(() => {
	console.log("Print Forth");
}, 500);
