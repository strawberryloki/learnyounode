var input = process.argv;
var total = 0;
for(var i =2;i<input.length;i++){
    total+= +input[i];
}

console.log(total);