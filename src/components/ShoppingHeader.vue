<template>
  <div>
    <el-header>
      <el-menu
        router
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
      >
        <el-menu-item route="/ShoppingBody" index="/ShoppingBody"
          >为您推荐</el-menu-item
        >
        <el-menu-item @click="$store.state.drawer = true">购物车</el-menu-item>
        <!--    <el-submenu index="2">
      <template slot="title">我的工作台</template>
      <el-menu-item index="2-1">选项1</el-menu-item>
      <el-menu-item index="2-2">选项2</el-menu-item>
      <el-menu-item index="2-3">选项3</el-menu-item>
      <el-submenu index="2-4">
        <template slot="title">选项4</template>
        <el-menu-item index="2-4-1">选项1</el-menu-item>
        <el-menu-item index="2-4-2">选项2</el-menu-item>
        <el-menu-item index="2-4-3">选项3</el-menu-item>
      </el-submenu>
    </el-submenu>-->
        <el-menu-item route="/ShoppingOrder" index="/ShoppingOrder"
          >订单管理</el-menu-item
        >
        <el-menu-item route="/UserLogin" index="/UserLogin"
          >登陆 | 注册</el-menu-item
        >
        <!--    <ShoppingBody/>-->
        <!--    侧边弹窗-->
      </el-menu>
    </el-header>

    <router-view></router-view>
  </div>
</template>

<script>
// import ShoppingBody from "@/components/ShoppingBody";
export default {
  name: "ShoppingHeader",
  /*  components:{
    ShoppingBody,
  },*/
  data() {
    return {
      drawer: false,
      activeIndex: "1",
      activeIndex2: "1",
    };
  },
  methods: {
    handleActive() {
      this.activeIndex = this.$route.path;
    },
  },
  mounted() {
    this.handleActive();
    // this.$bus.$on('handleActive');
  },
  updated() {
    this.handleActive();
  },
};
</script>

<style scoped></style>