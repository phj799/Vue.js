<template>
  <div>
    <h1>나</h1>
    {{ halbaeData }}
    <button @click="changeHalbaeDataFromGrandChild">손자가</button>
  </div>
</template>

<script>
export default {
  props: ["halbaeData"],
  methods: {
    changeHalbaeDataFromGrandChild() {
      this.$emit("changeHalbaeDataFromGrandChild", "랄라라");
    },
  },
};
</script>
