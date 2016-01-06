var through = require('through2');

var tr = through(write);

process.stdin.pipe(tr).pipe(process.stdout);

function write(buffer, encoding, next) {
	var string = buffer.toString().toUpperCase();
	this.push(string);
	next();
}

function end(done) {
	done();
}