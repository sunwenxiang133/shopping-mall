<template>
  <div class="shop-exhibition container clearfix">
    <div class="shop-exhibition-hd">
      <h2 class="fl">新增商品
        <span>好吃又管饱</span>
      </h2>
      <a href="" class="fr">查看全部 </a>
    </div>
    <ul class="shop-exhibition-list">
    <ShoppingItem v-for='index of items' :item="index" :key="index.id"></ShoppingItem>
    </ul>
  </div>
</template>

<script>
import {mapState} from 'vuex'

import ShoppingItem from "@/components/ShoppingItem";
export default {
  name: "ShoppingExhibition",
  components:{
    ShoppingItem,
  },
  computed:{
  ...mapState(['items'])
  }
}
</script>

<style scoped lang="less">

.shop-exhibition{
  height: 914px;
  background-color: #f5f5f5;

  .shop-exhibition-hd{
    height: 115px;
    /* background-color: rosybrown; */
    line-height: 115px;
    h2{
      height: 115px;
      font-size: 29px;
      font-weight: 600;
      span{
        font-size: 20px;
        color: #999;
        padding-left: 5px;
      }
    };
    a{
      color: #999;
      /* padding-right: 8px; */
    };
    a::after{
      /* right: 10px; */
      content: '';
      display: inline-block;
      width: 7px;
      height: 13px;
      padding-left: 20px;
      /* border-left: 10px; */
      /*background: url(../images/sprites.png) 0px -110px;*/
      vertical-align: middle;
    }
  }
}



/* .fgo-new-servant .shop-exhibition-list .box{
    overflow: hidden;
} */



/* .fgo-new-servant .shop-exhibition-list li:hover  */

</style>