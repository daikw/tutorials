const hello = function() {
	console.log('hello', this.type)
}

function Hoge() {
	this.type = 'hoge'
	this.hogeHello = hello.bind(this)
}

class Fuga {
	constructor() {
		this.type = 'fuga'
		this._bindedHogeHello = hello.bind(new Hoge())
	}

	fugaHello(from) {
		console.log('hello', this.type)
	}
}

const hoge = new Hoge()
const fuga = new Fuga()

hoge.hogeHello()
fuga.fugaHello()
fuga._bindedHogeHello()
