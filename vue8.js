//vue.js 에서는 백엔드 코드 사용 불가 jsp 파일안 </body>하단 <script>에 넣어줌

var code = new Vue({
	el:"#box",
	data:{
		user:a, //자바스크립트에 넘어노는 back-end 변수값을 vue 가상변수에 적용
		money:point,
		texts:"[45인치]UHD 모니터",
		htmls:"<ul><li>공지사항1</li><li>공지사항2</li></ul>",
		lists:""
	},
	
	methods:{
		ok:function(){
			var w = 0;
			while(w<5){
				this.lists = "<li>게시물"+w+"</li>";
				w++;
			}
		}
	}
});