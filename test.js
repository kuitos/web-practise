var a = function _a(_a){
	console.log(_a);
	var _a = _a;
	console.log(_a);
}
a(1);

function b(){
	var arguments = 1;
	console.log(arguments);
}
b();

function d(){
	
	var _d=1;

	function _d(){};

	console.log(_d);	
}
d();

function a(num){
	var num;
	console.log(num);
}
a(1);

function a(){
	var num=2;
	function num(){}
	console.log(num);
}
a();