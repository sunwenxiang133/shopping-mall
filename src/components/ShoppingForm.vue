<template>

  <div class="order">
<!--    {{myorder.id}}
    {{myorder.orderTime}}-->
    <div class="text">购物车ID:{{this.myorder.id}}</div>
    <div class="text">购买时间：{{this.myorder.orderTime}}</div>
    <div class="text">总价格：{{this.sum}}</div>

    <el-table stripe :data="tempItem" style="width: 100%">
      <el-table-column label="图片">
        <template slot-scope="scope">
          <img :src=" '/api/'+scope.row.pthumbnail" alt="" style="width: 150px;height: 150px">
          <!--          <el-popover placement="top-start" title="" trigger="hover">-->
          <!--        <img slot="reference" :src="scope.row.product.cover" style="width: 30px;height: 30px">-->
          <!--          </el-popover>-->
        </template>
      </el-table-column>
      <el-table-column prop="name" label="物品名称"></el-table-column>
      <el-table-column prop="price1" label="价格"></el-table-column>
      <el-table-column prop="count" label="购买量"></el-table-column>
<!--      <el-table-column prop="sum" label="总价格"></el-table-column>-->

<!--      <el-table-column prop="goodsName" label="名称"></el-table-column>-->

    </el-table>
  </div>
</template>

<script>
export default {
  name: "ShoppingForm",
  props:['myorder'],
  data(){
    return{
      orderDetails:[],
      tempItem:[],
      sum:0,
    }
  },
  mounted() {
    console.log('购物车是');
    console.log(this.myorder);
    this.orderDetails=this.myorder.orderDetail;

    this.orderDetails.forEach((item)=>{
      this.$store.state.items.forEach((itemF)=>{
        if(item.goodsName===itemF.name){
          // this.tempItem=itemF;
          itemF.count=item.nums.slice(0,1);
          this.sum +=itemF.count*itemF.price1;
          this.tempItem.push(itemF);
        }
      })
    })

  }
}
</script>

<style scoped>
.order{
  width: 60%;
  margin: 40px auto;
  border: 3px solid #30d2a0;
}

.text{
  text-align: center;
  font-size: 20px;
}

</style>