<!-- 컴포넌트는 단일 책임 원칙을 따름
     두개 이상의 div 사용 불가능 -->
<template>
  <div>
    <h1>HEADER</h1>
    <Search></Search>
  </div>
</template>

<script>
import Search from "./Search.vue";
export default {
  // template -> HTML형식의 태그가 들어간다
  // 한가지로만 감싸야한다.
  // script -> 데이터 설정..methods.. 외부 컴포넌트 가져오기..
  // style -> css 설정
  components:{
      Search
    }
}
</script>

<style>

</style>
