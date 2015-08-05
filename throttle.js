function throttle(method){

	debugger;

	clearTimeout(method.timer);

	method.timer = setTimeout(function() {
		method.call();
	}, 300);

}

var i = 10;

function log(){
	console.log(i);
}

while(i--){
	throttle(log);
}