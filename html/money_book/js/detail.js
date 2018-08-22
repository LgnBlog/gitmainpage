/*var mainVue = new Vue({
	el:"#main",
	methods:{
		//jquery方法加载
		qiehuan:function(url){//url表示切换页面
			$("#right").empty();
			$("#right").load(url);
			
		}
	},
	mounted:function(){
		this.qiehuan("detail.html");
	}
});4m   
*/

$(document).ready(function(){
    $(".panel .detail").on("click",function(){
   /* alert("段落被点击了。");*/
    $("#right").hide();
    $("#right2").css('right',0);
    $("#right2").css('left',0);
   /* $("#right2").show();*/
  });
/*$(".litem > a").click(function(){
		alert("sdd");
	})*/
});
//点击交叉事件

/* $(".litem > a").toggle(function(){
  	alert(this);
		$(this).next().show();
	},function(){
		$(this).next().hide();
});*/