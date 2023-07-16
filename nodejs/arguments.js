function manyArgs(a, b, c) {
	console.log({a, b, c})
	console.log(arguments)
	console.log(arguments[4])
}

manyArgs(1,2,3,4,[1,2,3],[3333,4444])

function manyArgs2(a, b, ...rest) {
	console.log({a, b})
	console.log(rest)
}

manyArgs2(1,2,3,4,5, [6,7,8])
