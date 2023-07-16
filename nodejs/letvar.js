function x() {
	console.log(dummy)
	let dummy = 'a';
	console.log(dummy)
}

function y() {
	console.log(dummy)
	var dummy = 'b';
	console.log(dummy)
}

function z() {
	console.log(dummy)
}

// x()
y()
// z()