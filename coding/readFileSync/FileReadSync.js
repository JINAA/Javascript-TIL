var fs = require('fs');

var data = fs.readFileSync('text.txt','utf8');

var arr = data.split("\n");
var sum = 0;
for(var i = 0; i < arr.length - 1; i++) {
	var n = parseInt(arr[i]);
	
	if(!!n) {
		sum += n;
	} else {
		console.log("err" + n);
	}

}
console.log(sum);
console.log("End...");