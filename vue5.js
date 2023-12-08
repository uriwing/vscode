var b = new Vue({
	
	el:"#box2",
	data:{
		search:""
	},
	methods:{
		gopage:function(k){
			k.preventDefault();
			if(this.search==""){
				alert("검색할 상품명을 입력해 주세요!");
				//sh.search.focus();  //2.5이상 정상 작동
				this.$refs.search.focus();	//2.5 이하버전
			}
			else {
				sh.submit();
			}
		}
	}
	
});


var a = new Vue({
	el:"#box",
	data: {
		cp:"" //radio 선택값
	},
	methods:{
		abc:function(zz){ //zz => submit 전용
			zz.preventDefault(); //return false와 동일
			if(this.cp==""){
				alert("쿠폰을 선택해주셔야합니다");
			}
			else{
				//return false, return true => vue에서 없음
				f.submit();
			}
			
		}
	}
	
});