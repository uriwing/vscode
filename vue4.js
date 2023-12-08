var html = new Vue({
	
	el:"#box",
	data:{
		search:"",
		subject:[]	//v-model이 같은 이름일 경우 배열기호 받으면 배열값으로 저장이 됨
	},
	
	methods:{
		
		}
	});
	
	
	var html2 = new Vue({
	
	el:"#box2",
	data:{
		agree:""
	},
	
	methods:{
			aaa:function(){
				if(this.agree==false){
					alert("동의함에 체크하셔야 합니다");
					f.submit();
				}
				else {
					//this.agree = "Y";
					f.submit();
					alert("동의완료되었습니다");
				}
			}
		}
	});