<template>
  <li>
    <a href="#">
      <div class="mask"></div>
      <div class="box">
        <img :src="Pic" alt=""/>
      </div>
      <i v-show="!item.love" @click="changeState(item)" class="iconfont icon-favorites-fill"></i>
      <i v-show="item.love" @click="changeState(item)" class="iconfont icon-favorites-fill love"></i>
      <h3>{{ item.name }}</h3>
      <p>价格￥{{ item.price1 }}</p>
    </a>
  </li>
</template>

<script>
export default {
  name: "ShoppingItem",
  props: ["item"],
  methods: {
    changeState() {
      // console.log(name);
      // console.log('changeState');
      this.$store.commit("changeState", this.item.id);
      console.log('changeState被调用了');
      /*if(this.item.love){
        console.log(this.item);
      }*/
    },
  },
  computed: {
    Pic() {
      return "http://localhost:8080/api/" + this.item.pthumbnail;
    },
  },
  mounted() {
    this.$bus.$on('changeState', this.changeState);
  }
  /*updated() {
    this.$store.commit("changeState", this.item.id);
  }*/
};
</script>

<style scoped lang="less">
li {
  float: left;
  /* position: absolute; */
  position: relative;
  width: 260px;
  height: 340px;
  margin-right: 9px;
  margin-bottom: 9px;
  background-color: rgb(224, 236, 238);
  /* background-color: silver; */
  text-align: center;
  box-shadow: 2px 3px 6px 3px #999;
  overflow: hidden;
  transition: all 0.5s;

  /* border: 10px solid #000; */

  i {
    z-index: 100;
    position: absolute;
    /* width: 10px; */
    left: 85%;
    top: -5px;
    /* scale: 5; */
    font-size: 40px;
    //color: rgba(255, 10, 10, 0.8);
  }

  .love {
    color: rgba(255, 10, 10, 0.8);
  }

  h3 {
    height: 26px;
    margin-top: 16px;
    font-size: 16px;
    font-weight: 400;
    transition: position 0.4s;
  }

  p {
    font-size: 14px;
  }

  .mask {
    z-index: 1;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0;
    transition: all 0.3s;
    background-image: linear-gradient(transparent, rgba(0, 0, 0, 0.45));
  }


  :hover {
    transform: scale(1.05);
    /* box-shadow: 4px 6px 8px 6px #999; */

    .mask {
      opacity: 1;
    }

    h3 {
      position: absolute;
      bottom: 35px;
      font-size: 20px;
      font-weight: bold;
      color: white;
      z-index: 2;
      text-align: center;
      /* border: 1px solid #000; */
      width: 100%;
    }

    img {
      margin-top: 41px;
      transform: scale(1.268);
    }
  }

  img {
    transition: all 0.5s;
    width: 100%;
  }
}

li:nth-child(5n) {
  margin-right: 0px;
}
</style>