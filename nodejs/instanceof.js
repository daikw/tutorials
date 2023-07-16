const assert = require('assert').strict;

function APrototype() {
	this.hoge = 'hoge'
}

let ap = new APrototype();

assert(ap instanceof APrototype)
