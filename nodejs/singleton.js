// -------------------------------------------------------

class Foo {
  constructor() {
    console.log("Foo constructed!");
		this.count = 0;
  }

  hello() {
		this.count++
    console.log("hello from Foo", this.count);
  }
}

// -------------------------------------------------------

function Bar() {
	if (!(this instanceof Bar)) { // too complicated to realize singleton
			return new Bar();
	}

	console.log("Bar constructed!")
	this.count = 0;
}

Bar.prototype.hello = function() {
	this.count++
	console.log("hello from Bar", this.count);
}

// -------------------------------------------------------
module.exports.foo = (() => {
	console.log("evaluated");
	return new Foo();
})(); // export as a singleton, because exports is evaluated only once.

module.exports.bar = Bar();
