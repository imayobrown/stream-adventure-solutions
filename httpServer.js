var http = require('http');
var tr = require('through2');

var server = http.createServer( writeBack);

server.listen(process.argv[2]);

function writeBack(req, res) {
	if (req.method == 'POST') {
		req.pipe(tr(toUpper)).pipe(res);
	}
}

function toUpper(buffer, encoding, next) {
	var string = buffer.toString().toUpperCase();
	this.push(string);
	next();
}