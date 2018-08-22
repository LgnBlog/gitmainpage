/*产生随机数函数*/
function validateCode(n){
	var s ="1234567890qwertyuioplaksjjjjjddhhfgzxcvbnmQWERTYUIOPLKJHGFDSAZXCVBNM";
	var ret="";
	for (var i = 0; i <n; i++) {
		var empt =Math.floor(Math.random()*62);
		ret += s.charAt(empt);
	}
	return ret ;
}
/*显示随机数的函数*/
function show(){
	document.getElementById("msg").innerHTML=validateCode(4);
}
