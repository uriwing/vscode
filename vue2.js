let a = new Vue({	//vue영역을 할당
	el:"#box", //한번밖에 못씀
	data:{	//v-bind(속성),v-model(=value) 형태로 처리하는 구조 (함수X) 가상변수만 허용
		test : "hong",
		c:"div_box",
		p:"아이디를 입력하세요"
	},
	methods:{	//여러 가상의 함수 집합공간 함수만 사용, 가상변수 생성X
		abc:function(){ //가상함수
			alert("전송하였습니다.");
		},
		bbb:function(z){
			console.log(z.target.value);
		}
	}
});