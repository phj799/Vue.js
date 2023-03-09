<template>
  <div>
    <h1>할배</h1>
    {{ halbaeData }}
    <HomeParent
      :halbaeData="halbaeData"
      :halbaeData2="halbaeData2"
      @changeHalbaeData="changeHalbaeData"
    />
  </div>
</template>

<script>
import HomeParent from "@/components/HomeParent.vue";
export default {
  components: {
    HomeParent,
  },
  data() {
    return {
      halbaeData: "나는 할배.",
      halbaeData2: "할배가 둘.",
    };
  },
  methods: {
    changeHalbaeData(text) {
      this.halbaeData = text;
    },
  },
};
</script>
