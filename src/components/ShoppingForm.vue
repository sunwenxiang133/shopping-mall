<template>

  <div class="order">
    <el-table stripe :data="myorder" style="width: 100%">
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
    </el-table>
  </div>
</template>

<script>
export default {
  name: "ShoppingForm",
  props:['myorder'],
  mounted() {
    console.log(this.myorder);
  }
}
</script>

<style scoped>
.order{
  width: 60%;
  margin: 40px auto;
  border: 3px solid #30d2a0;
}

</style>