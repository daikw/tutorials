function printArgs() {
	console.log(arguments)
}

const params = [1,2,3,'4']
printArgs(...params, 5)
printArgs(params, 5)
