var fs = require('fs');

//console.log(process.argv[2]);

fs.createReadStream(process.argv[2]).pipe(process.stdout);