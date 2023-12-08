<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script src="https://cdn.jsdelivr.net/npm/vue@2"></script>
</head>
<body>
<!-- 가격,수량 숫자 입력 
합계확인 버튼 클릭시 사용자가 입력한 값을 곱하여 총 합계금액에 출력
단, 4번은 합계 확인 버튼이 클릭 되어야만 출력되는 파트
 -->
 
 <section id="box">
 가격 : <input type="text" v-model="money"><br>
 수량 : <input type="text" v-model="ea"><br>
 <input type="button" value="합계확인" v-on:click="cal"><br>
 <span v-if="view==1"> 총 합계 금액 :{{total}}원</span>
 </section>
</body>
<script src="./vue10.js?v=2"></script>
</html>