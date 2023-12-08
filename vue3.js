let html = new Vue({ //실시간 데이터를 반영할 수 있습니다
	el:"#box",
	data:{
		t1:"",
		t2:"",
		p:"숫자를 입력하세요",
		total:""
	},
	methods:{
		abc:function(){	//vue의 html 값은 기본 문자 abc:()=> {} 화살표함수(삼항식) : 즉시실행
			//this => data함수를 지칭
			this.total = Number(this.t1) + Number(this.t2);  
		}
	}
	
});

let html2 = new Vue({ //실시간 데이터를 반영할 수 있습니다
	el:"#box2",
	data:{
		code:"",
		or:"123456", //발급된 보안코드
		msg:"" //메세지 출력 변수
	},
	methods:{
		ck:function(){
			if(this.code==""){
				this.msg = "보안코드를 입력하세요";
				}
				else {
					if(this.code==this.ori){
						this.msg = "보안코드를 확인하였습니다";
			}
			else {
				this.msg = "해당보안코드가 잘못되었습니다";
			}	
		}
	}
	}
});