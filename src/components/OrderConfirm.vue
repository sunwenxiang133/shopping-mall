<template>
  <div>
    <shopping-form v-for="(order,index) in orders" :key="index" :myorder="order"></shopping-form>
  </div>
</template>

<script>
import ShoppingForm from "@/components/ShoppingForm";
export default {
  name: "OrderConfirm",
  components:{
    ShoppingForm
  },
  data(){
    return{
      OrderConfirm:this.$store.state.order
    }
  },
  computed:{
    orders(){
      return this.$store.state.myOrders;
    }
  },
  mounted() {
    this.$store.state.myOrders.forEach(()=>{
    })
  }
}
</script>

<style scoped>

</style>