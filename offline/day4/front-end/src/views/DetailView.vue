<template>
  <div>
    <h1>Detail</h1>
    <div v-if="!isLoading">
      <b-spinner variant="success" label="Spinning"></b-spinner>
    </div>
    <div v-else>
      <div> {{ menuId }} 번 메뉴 디테일페이지입니다.</div> 
      <div> 주문하신 메뉴는 "{{ menuInfo.name }}" 입니다.</div>
      <div> 오이시쿠나레 {{ menuInfo.description }} 뀽😋</div>
    </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
  data() {
    return {
      menuId: -1,
      menuInfo: {},
      isLoading: false,
    }
  },
  async created() {
    try {
      this.menuId = this.$route.params.id;
      const response = await axios.get(`http://localhost:8080/api/menus/${this.menuId}`);
      this.menuInfo = response.data;
      this.isLoading = this.menuInfo;
    } catch (error) {
      console.log(error);
    } 
  }
}
</script>

<style>

</style>