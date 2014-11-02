var http = require('http');

var url = process.argv[2];
var req = http.get(url, function (res){
  res.setEncoding('utf8');
  res.on('data', console.log);
  console.log('=======================================================');
  
});


req.on('error', console.error);