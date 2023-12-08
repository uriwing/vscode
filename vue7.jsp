<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Vue를 이용한 카운팅 방법</title>
<script src="https://cdn.jsdelivr.net/npm/vue@2.7.15"></script>
</head>
<body>
<section id="box">
<!-- 
	<input v-bind:type="b" v-on:click="numbers++" v-model="btn1">
	<input v-bind:type="b" v-on:click="numbers--" v-model="btn2">
 -->	
	<input v-bind:type="b" v-on:click="btn_numbers('+')" v-model="btn1">
	<input v-bind:type="b" v-on:click="btn_numbers('-')" v-model="btn2">
	<span>{{numbers}}EA</span><br><br>
</section>

<section id="box2">
	<select v-on:change="product" v-model="s">
		<option value="">[상품을 선택하세요]</option>
		<option value="167000">모니터 - 167,000</option>
		<option value="120000">키보드 - 120,000</option>
		<option value="100000">마우스 - 100,000</option>
	</select>
	<select v-on:change="product" v-model="ea"> 
	<!--v-on:change="product" product 함수 하나만 사용 v-model 값때문에 하나의 값 -->
	<option value="">[수량선택]</option>
	<option value="1">1EA</option>
	<option value="2">2EA</option>
	<option value="3">3EA</option>
	</select>
	<div>{{total_number}}</div>
</section>

</body>
<script src="./vue7.js?v=2"></script>
</html>