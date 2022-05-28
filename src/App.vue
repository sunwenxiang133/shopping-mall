<template>
  <ShoppingPage></ShoppingPage>
</template>

<script>
import ShoppingPage from "@/components/ShoppingPage";

export default {
  name: "App",
  components: {
    ShoppingPage
  },
  methods: {

  },
  mounted() {
    this.$axios.get('http://localhost:8080/api/goods/list').then((response)=>{
      this.$store.commit('setItem',response.data);
      console.log(response.data);
    }).catch((response)=>{
      console.log(response);
    })
  }
};
</script>

<style lang="less">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>