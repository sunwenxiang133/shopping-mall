<template>
  <div class="cart">
    <el-table stripe :data="favouriteItems" style="width: 100%">
      <el-table-column
          type="selection"
          width="55">
      </el-table-column>
      <el-table-column type="index"> </el-table-column>

      <el-table-column label="图片">
        <template slot-scope="scope">
                    <img :src=" 'http://localhost:8080/api/'+scope.row.pthumbnail" alt="" style="width: 150px;height: 150px">
<!--          <el-popover placement="top-start" title="" trigger="hover">-->
            <!--        <img slot="reference" :src="scope.row.product.cover" style="width: 30px;height: 30px">-->
<!--          </el-popover>-->
        </template>
      </el-table-column>
      <el-table-column prop="name" label="物品名称"></el-table-column>
      <el-table-column prop="price1" label="价格"></el-table-column>
      <el-table-column prop="count" label="购买量"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button @click="changeAdd(scope.row.id)" size="mini" type="success" plain>添加</el-button>
          <el-button @click="changeMin(scope.row.id)" size="mini" type="danger" plain>删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    总价：{{totalCount}}
  </div>
</template>

<script>
import {mapMutations} from 'vuex'

export default {
  name: "ShoppingCart",
  computed:{
    favouriteItems(){
      return this.$store.state.favourite;
    },
    totalCount(){
      var totalcount=0;
      this.favouriteItems.forEach((item)=>{
        if(item.love){
          totalcount+=item.price1*item.count;
        }
      })
      return totalcount;
    },
  },
  methods:{
    ...mapMutations(['changeMin','changeAdd'])
  }
}
</script>

<style scoped>


</style>