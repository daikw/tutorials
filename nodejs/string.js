const alnum = '1234567890abcdefg';

const parts = alnum.match(/.{1,2}/g);
console.log(parts);

console.log(parts.concat())

params = ["0x1111", "0x1010"]
const bytes = params
    .map((hex) => hex.replace(/^0x/, ""))
    .join("")
		.match(/.{1,2}/g);

console.log(bytes)

