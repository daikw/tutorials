let buf;

buf = Buffer.alloc(100);
console.log(buf);
console.log(buf.toString('base64'));

buf = Buffer.from('ffeeddccbbaa', 'base64');
console.log(buf)
console.log(buf.toString('base64'))

buf = Buffer.from([0x61, 0x7a])
console.log(buf.toString('utf8'))
