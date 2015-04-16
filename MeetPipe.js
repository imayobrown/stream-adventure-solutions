var fs = require('fs');

var FILE = process.argv[2];

fs.createReadStream(FILE).pipe(process.stdout);