<template>
  <div>
    <h1>Home</h1>
    <ul v-if="menus.length">
      <div>
        <li v-for="menu in menus" :key="menu.id">
          <div class="menu-name" @click="goDetail(menu.id)">메뉴: {{ menu.name }} </div>
          <div>설명: {{ menu.description }}</div>
          <hr>
        </li>
      </div>    
    </ul>
    <div v-else>
      <b-spinner variant="success" label="Spinning"></b-spinner>
    </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
  data() {
    return {
      menus: [],
    }
  },
  async created() {
    try {
      const response = await axios.get("http://localhost:8080/api/menus");
      this.menus = response.data;
    } catch (error) {
      console.log(error);
    } 
  },
  methods: {
    goDetail(id) {
      this.$router.push(`/detail/${id}`);
    }
  },
}
</script>

<style scoped>
.menu-name {
  color: blue;
  text-decoration: underline;
}
</style>