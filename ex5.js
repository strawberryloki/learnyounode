var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2], function (err, content) {
    var filtered = content.filter(function (value) {
        return path.extname(value).replace('.','') == process.argv[3].toString();
    });
    for (value in filtered) {
        console.info(filtered[value]);
    }
});




  /*var fs = require('fs')
    var path = require('path')
    
    fs.readdir(process.argv[2], function (err, list) {
      list.forEach(function (file) {
        if (path.extname(file) === '.' + process.argv[3])
          console.log(file)
      })
    })
*/