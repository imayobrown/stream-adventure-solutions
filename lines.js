var split = require('split');
var through = require('through2');

var tr = through(write);

var lineNumber = 0;

process.stdin.pipe(split()).pipe(tr);

function write(line, encoding, next) {
	if (lineNumber%2 == 1){
		console.log(line.toString().toUpperCase());
	}
	else {
		console.log(line.toString().toLowerCase());
	}
	lineNumber++;
	next();
}

//Need to pipe to process.stdout to match official solution