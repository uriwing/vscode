//vue => Front-end(O), Back-end(X)
//react(Class) => Front-end(X), Back-end(O)

let html = new Vue({
	
	el:"#box",
	data:{ //methods의 이름과 동일한 이름을 사용금지
		b:"button",
		numbers:0,
		btn1:"+",
		btn2:"-"
		
	},
	
	methods:{
		btn_numbers:function(z){ //data의 이름과 동일한 이름을 사용금지
			if(z=="+"){	//이벤트핸들링
				this.numbers++; //+1 증가
			}
			else{
				if(this.numbers > 0){ //0보다 큰 값일 경우
					this.numbers--; //-1감소
				}
			}
		}
	}
	
});


var html2 = new Vue({
	el : "#box2",
	data:{
		s:"",
		ea:"",
		total_number:0
	},
	methods:{
		product:function(){
			console.log(this.s);
			console.log(this.ea);
			this.total_number = (Number(this.s) * Number(this.ea)).toLocaleString(); // 가격(숫자)에 , 붙이기
			
		}
	}
});