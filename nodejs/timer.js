const timeout = (d, n) => {
    return setTimeout(() => {
        console.log('timeout', n);
    }, d);
};
const immediate = (n) => {
    return setImmediate(() => {
        console.log('immediate', n);
    });
};

const nexttick = (n) => {
    return process.nextTick(() => {
        console.log('nexttick', n);
    });
};

let n = 0;
timeout(300, n++);
timeout(200, n++);
timeout(100, n++);
timeout(0, n++);
immediate(n++);
nexttick(n++);
timeout(0, n++);
immediate(n++);
nexttick(n++);
timeout(0, n++);
immediate(n++);
nexttick(n++);
