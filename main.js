var hello = require('./sayHello');
helloObj = new hello;
helloObj.setName('David');
helloObj.sayHello();

var server = require('./server');
var router = require('./router');
server.start(router.route);

