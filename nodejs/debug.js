// https://www.npmjs.com/package/debug

process.env.DEBUG = "d1";
const debug = require('debug')

const d1 = debug('d1');
const d2 = debug('d2');

d1('111');
d2('222');
d1('333');
