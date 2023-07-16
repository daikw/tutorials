const cp = require('child_process');
const ls = cp.spawn('ls', ['-lh', '.']);

ls.stdout.on('data', data => {
	console.log(data.toString())
});
