var http = require('http');

var url = [process.argv[2], process.argv[3], process.argv[4]];
var count = 0;
// GET our url
http.get(url[0], function print(res) {
    var data = '';
   

    // Set response data to be a string
    res.setEncoding('utf8');

    // Add all data to our data array
    res.on('data', function (r) {
        data += r
    });

    // Log the length of the received data
    // Log a concatenated version of the data
    res.on('end', function (r) {
        count += 1
        console.log(data);
        if (count < url.length) {
            http.get(url[count], print);
        }
    });

    // Log errors to the console

}).on('error', function (e) {
    console.error('ERROR: ' + e.message);
});


//
// var http = require('http')
//    var bl = require('bl')
//    var results = []
//    var count = 0
//    
//    function printResults () {
//      for (var i = 0; i < 3; i++)
//        console.log(results[i])
//    }
//    
//    function httpGet (index) {
//      http.get(process.argv[2 + index], function (response) {
//        response.pipe(bl(function (err, data) {
//          if (err)
//            return console.error(err)
//    
//          results[index] = data.toString()
//          count++
//    
//          if (count == 3) // yay! we are the last one!
//            printResults()
//        }))
//      })
//    }
//    
//    for (var i = 0; i < 3; i++)
//      httpGet(i)
