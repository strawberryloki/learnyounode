var fs = require('fs');
fs.readFile(process.argv[2], 'utf-8', function (err, data) {
    if (err) {

    } else {
        var result = data.split('\n');
        console.log(result.length - 1);
    }
})