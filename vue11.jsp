<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Vue 반복문 v-for(for in)</title>
<script src="https://cdn.jsdelivr.net/npm/vue@2"></script>
</head>
<!-- body태그에 view 컨테이너 생성안됨 -->
<!-- v-for : 배열이 기본(키배열, 배열) -->
<body>
<aside id="box">
	<ul>
		<!-- v-for는 vue 전용 반복문 출력 (for in) 기본사항 -->
		<!-- lists 배열값 a 배열에 데이터값 -->
		<li v-for="a in lists">{{a}}</li>
	</ul>
	<ol>
		<!-- key 배열 키 이름을 이용하여 출력형태, index : 배열번호 -->
		<li v-for="b,i in person">{{b.names}}-{{b.age}} {{i}}</li>
	</ol>
	<dl>
		<dt>응시자 시험합격 현황</dt>
		<!-- c : 배열 데이터값, d : 배열 키이름, e : 배열 노드번호 -->
		<dd v-for="c,d,e in pass"> 
		<!-- 배열이 3번 돌아감 시험명 : {{c.usernmae}} 안먹힘 -->
		{{c}} <!-- 무조건 순서대로 찍힘, 재배치 어려움 -->
		</dd>
	</dl>
	<!-- 배열값 없이 사용시 숫자는 1부터 시작함 -->
	<ul>
		<li v-for="aa,bb in fileno"><input type="file" name="mfile">{{bb}}</li>
		<!-- v-for="aa,bb in fileno => 0,1,2 로 출력됨 -->
	</ul>
	
</aside>

</body>
<script src="./vue11.js?=v3"></script>
</html>