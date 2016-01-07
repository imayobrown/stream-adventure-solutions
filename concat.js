"use-strict";

var concat = require('concat-stream');

process.stdin.pipe(concat(write));

function write(body){
	console.log(body.toString().split("").reverse().join(""));
}