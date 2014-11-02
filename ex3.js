var fs = require('fs')
var str = fs.readFileSync(process.argv[2]).toString();
var result = str.split('\n');
console.log(result.length-1);