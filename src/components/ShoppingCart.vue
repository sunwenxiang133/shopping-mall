<template>
  <div class="cart">
    <el-table stripe :data="favouriteItems" style="width: 100%" @selection-change="handleSelectionChange">
      <el-table-column
          type="selection"
          prop="mychecked"
          width="55">
      </el-table-column>
      <el-table-column type="index"></el-table-column>

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
      <el-table-column label="操作">
        <template slot-scope="scope">
          <!--          <button  @click="toggleSelection([favouriteItems[0]])"></button>-->
          <el-button @click="changeAdd(scope.row.id)" size="mini" type="success" plain>添加</el-button>
          <el-button @click="changeMin(scope.row.id)" size="mini" type="danger" plain>删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="cart-bottom">
      <div class="total-price">
        总价：{{ totalCount }}
      </div>
      <el-button @click="open">购买</el-button>
    </div>
<!--  {{`/api/order/addCastOrder?userId=${this.$store.state.userId}&cartList=${this.$store.state.myCartID}`}}-->
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
// import {mapState} from "vuex";

export default {
  name: "ShoppingCart",
  data() {
    return {
      selectItem: [],
      myFavouriteItem:[],
    }
  },
  computed: {
    favouriteItems() {
      return this.$store.state.favourite;
    },
    totalCount() {
      var totalcount = 0;
      this.$store.state.order.forEach((item) => {
        if (item.love) {
          totalcount += item.price1 * item.count;
        }
      })
      return totalcount;
    },
  },
  updated() {
    console.log('123');
  },
  methods: {
    handleSelectionChange(selection) {
      // this.selectItem = selection.map(item => item.selectItem);
      // selection.mychecked = !selection.mychecked;
      /*this.favouriteItems.forEach((item)=>{
        if(selection)
      })*/
      if (selection.length !== 0) {
        // console.log("不为0");
        this.changeOrder(selection);
      }
      /*console.log(this.$store.state.order);*/
    },
    toggleSelection(rows) {
      console.log(this.favouriteItems);
      if (rows) {
        rows.forEach(row => {
          console.log(this.$refs);
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    open() {
      this.$confirm('请核对您购买的物品', '订单确认', {
        confirmButtonText: '确认',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
              type: 'success',
              message: '购买成功!'
            },
            this.$store.state.myOrders.unshift(this.$store.state.order),

            // var tmpList=this.$store.state.order;


            this.$store.state.myCartID=[],



            this.$store.state.order.forEach((items) => {
              console.log('@@@');
              console.log(this.$store.state.myCart);
              console.log(this.$store.state.order);
              this.$store.state.myCart.forEach((itemsS)=>{
                if(items.name===itemsS.name){
                  this.$store.state.myCartID.push(itemsS.cardid);
                }
              })

              this.$store.state.favourite.forEach((itemsF) => {
                if (items.name === itemsF.name) {
                  itemsF.love = false;
                }
              })
              // this.$bus.$emit('changeState')
            }),


            //生成订单
            this.$axios.post(`/api/order/addCastOrder?userId=${this.$store.state.userId}&cartList=${this.$store.state.myCartID}`)
                .then((res) => {
                  console.log('订单添加成功');
                  console.log(res);
                })
                .catch(() => {
                  console.log(this.$store.state.userId);
                  console.log(this.$store.state.myCartID);
                  console.log('订单添加失败')
                }),


            this.$store.state.drawer = false,
            this.$store.commit('changeNewState')
            // this.$store.commit("changeState", this.item.id)
            // console.log(this.$store.state.myOrders)
        );
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消购买'
        });
      });
    },
    ...mapMutations(['changeMin', 'changeAdd', 'changeOrder'])
  }
}
</script>

<style lang="less" scoped>
.cart-bottom {
  margin: 0 auto;
  margin-top: 10%;

  .total-price {
    text-align: center;
    font-size: 30px;
    margin: 0 auto;
  }

  .el-button {
    display: block;
    margin: 0 auto;
  }
}

</style>