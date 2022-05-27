<template>
  <div class="order">
    <shopping-form
      v-for="(order, index) in orders"
      :key="index"
      :myorder="order"
    ></shopping-form>
  </div>

  <!--  <div class="order">
    <el-table stripe :data="myorder" style="width: 100%">
      <el-table-column type="index"> </el-table-column>
      <el-table-column label="图片">
        <template slot-scope="scope">
          <img :src=" '/api/'+scope.row.pthumbnail" alt="" style="width: 150px;height: 150px">
          &lt;!&ndash;          <el-popover placement="top-start" title="" trigger="hover">&ndash;&gt;
          &lt;!&ndash;        <img slot="reference" :src="scope.row.product.cover" style="width: 30px;height: 30px">&ndash;&gt;
          &lt;!&ndash;          </el-popover>&ndash;&gt;
        </template>
      </el-table-column>
      <el-table-column prop="name" label="物品名称"></el-table-column>
      <el-table-column prop="price1" label="价格"></el-table-column>
      <el-table-column prop="count" label="购买量"></el-table-column>
&lt;!&ndash;      <el-table-column label="操作">
        <template slot-scope="scope">
          <button  @click="toggleSelection([favouriteItems[0]])"></button>
          <el-button @click="changeAdd(scope.row.id)" size="mini" type="success" plain>添加</el-button>
          <el-button @click="changeMin(scope.row.id)" size="mini" type="danger" plain>删除</el-button>
        </template>
      </el-table-column>&ndash;&gt;
    </el-table>
    <div class="cart-bottom">
      <div class="total-price">
&lt;!&ndash;        总价：{{totalCount}}&ndash;&gt;
      </div>
&lt;!&ndash;      <el-button @click="open">购买</el-button>&ndash;&gt;
    </div>
  </div>-->
</template>

<script>
import ShoppingForm from "@/components/ShoppingForm";
export default {
  name: "ShoppingOrder",
  components: {
    ShoppingForm,
  },
  data() {
    return {
      myOrder: this.$store.state.order,
    };
  },
  computed: {
    orders() {
      return this.$store.state.myOrders;
    },
  },
};
</script>

<style lang="less" scoped></style>