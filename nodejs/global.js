function printGlobals() {
	console.log(globalLet)
	console.log(globalVar)
	console.log(localLet)
	console.log(localVar)
}

exports.printGlobals = printGlobals
