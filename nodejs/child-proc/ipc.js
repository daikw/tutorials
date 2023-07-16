const cp = require('child_process');

const ch = cp.fork('./child-proc/child.js')
ch.on('message', msg => {
	console.log({ parent: msg })
});

ch.send('message', 'From Parent');
