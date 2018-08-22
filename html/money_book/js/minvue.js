var addDetailVue = new Vue({
	el:"#addDetailVue",
	data:{
		acountTypes:[{'no':0,'name':'收入'},{'no':1,'name':'支出'}],
		type:[{'no':1,'name':'工资'},{'no':2,'name':'奖金'}]
	},
	methods:{
		acountChange:function(){
			var index=event.target.selectedIndex;
			//console.log(index);
			if(index==0){
				addDetailVue.type=[{'no':1,'name':'工资'},{'no':2,'name':'奖金'}];
			}
			else{
				addDetailVue.type=[{'no':3,'name':'购物'},{'no':4,'name':'买皮肤'},{'no':5,'name':'娱乐'}];
			}
		}
	}
});