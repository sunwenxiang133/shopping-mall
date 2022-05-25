<template>
  <div class="mybody">
    <el-carousel :interval="4000" type="card" height="600px">
      <el-carousel-item v-for="item in myItem" :key="item.id">
        <h3 class="medium">
          <img
              :src=" 'http://localhost:8080/api/'+item.pthumbnail "
              alt=""
          >
        </h3>
      </el-carousel-item>
    </el-carousel>
  <el-drawer
      title="购物车"
      size="40%"
      :visible.sync="$store.state.drawer">
    <ShoppingCart></ShoppingCart>
  </el-drawer>
    <ShoppingExhibition/>
  </div>
</template>

<script>
import ShoppingCart from "@/components/ShoppingCart";
import ShoppingExhibition from "@/components/ShoppingExhibition";

import {mapState} from "vuex";
export default {
  name: "ShoppingBody",
  components:{
    ShoppingCart,ShoppingExhibition,
  },
  data(){
    return{

    }
  },
  computed:{
  ...mapState(['items']),
    myItem(){
    return this.items.slice(0,6);
    },
  }
}
</script>

<style scoped lang="less">
.mybody{
  width: 1600px;
  margin: 0 auto;
}

.el-main{
  margin-top: 60px;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
img{
  width:800px;
  height:600px;
}

</style>