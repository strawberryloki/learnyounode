function hello() {
    var name;
    this.setName = function (thyname) {
        name = thyname;
    };
    this.sayHello = function () {
        console.log('Hello ' + name)
    };
};

module.exports = hello;