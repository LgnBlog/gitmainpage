function showDateTime(){
	var turnTime = new Array("日","一","二","三","四","五","六");
    var nowTime = new Date();
    var nYear = nowTime.getFullYear();
    var nMonth = nowTime.getMonth()+1;
    var nDate = nowTime.getDate();
    var h = nowTime.getHours();
    var m = nowTime.getMinutes();
    var s = nowTime.getSeconds();
   /*alert(nowTime);*/
   var sDay = turnTime[nowTime.getDay()];
   /*alert(nYear+"年"+nMonth+"月"+nDate+"日"+"星期"+sDay);*/
  document.getElementById("date").innerHTML =(nYear+"年"+nMonth+"月"+nDate+"日"+sDay+"星期");
  h=formatTowDigits(h);
  m=formatTowDigits(m);
  s=formatTowDigits(s);
  document.getElementById("time").innerHTML =(h+":"+m+":"+s);
  window.setTimeout("showDateTime()",1000);//每秒执行一次showDateTime()
}
window.onload =showDateTime; //页面加载调用函数
/*如果是一位数10位就补“0”*/
function formatTowDigits(s){
	if(s<10){
		return "0"+s;
	}else 
	{
		return s;
	}
}
