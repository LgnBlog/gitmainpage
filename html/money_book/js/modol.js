var addtypes =function(date){
	var typeselect =$("#types").empty();
	for(var i=0;i<date.length;i++){
		var opt =$("<option value='"+date[i].no+"'>"+date[i].name+"</option>");
		typeselect.append(opt);
	}
}

var changeAcount = function(o){
	var index = o.selectedIndex;

	if(index==0){//收入
		var date1= [{'no':1,'name':"工资"},{"no":2,'name':"奖金"}];
		addtypes(date1);
	}else{//支出
		
		var date2= [{"no":3,'name':"购物"},{"no":4,'name':"买皮肤"},{"no":5,'name':"娱乐"}];
		addtypes(date2);
	}
}

   var date1= [{'no':1,'name':"工资"},{"no":2,'name':"奖金"}];
    addtypes(date1);