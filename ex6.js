var m = require('./ex6module');

m(process.argv[2],process.argv[3], function(err,data){
 if(err){
    return console.error('error');
 }   
    data.forEach(function(str){
        console.log(str);
    });
});