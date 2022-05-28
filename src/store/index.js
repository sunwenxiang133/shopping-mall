//创建Vuex中的store
import Vuex from "vuex";
import Vue from "vue";
import axios from "axios";

Vue.use(Vuex);

const actions = {
  text(context, value) {
    context.commit("TEXT", value);
    console.log(context);
  },
};
const mutations = {
  setItem(context, items) {
    // console.log(items);
    context.items = items;
    console.log("setItem为" + items);
  },
  changeState(context, id) {
    // console.log(context.items);
    state.items.forEach((item) => {
      if (item.id === id) {
        if (item.love) {
          item.love = false;

          state.myCart.forEach((mitem)=>{
            if(mitem.goodsId===id){
              state.temp=mitem.cardid;
              console.log('###');
              console.log(state.temp);
            }
          })

          axios
            .delete(
              `/api/cart/deleteById?userId=${state.userId}&cartId=${state.temp}`
            )
            .then((response) => {
              console.log("购物车删除成功,返回值为:");
              console.log(response);
              state.myCart=response.data;
            })
            .catch((response) => {
              console.log(response);
              console.log(state.userId);
              console.log(item.id);
              console.log(item.count);
              console.log(item.price1);
            });
        } else {
          // console.log(item.love);
          Vue.set(item, "mychecked", false);
          Vue.set(item, "love", true);
          Vue.set(item, "count", 1);
        }
        // item.love = !item.love;
        // console.log(item);
      }
    });
    state.favourite = state.items.filter((item) => {
      if (item.love === true) {
        return item;
      }
    });

    // console.log(state.favourite);
  },

  changeNewState() {
    state.favourite = state.items.filter((item) => {
      if (item.love === true) {
        return item;
      }
    });
  },

  changeAdd(context, myItem) {
    // console.log(myItem);
    state.items.forEach((item) => {
      /*            console.log(myItem);
                                                                                                                                                                                                                                                                                                                        console.log(item.id);*/
      if (item.id === myItem) {
        item.count = parseInt(item.count) + 1;


        state.myCart.forEach((mitem)=>{
          if(mitem.goodsId===item.id){
            state.temp=mitem.cardid;
            console.log('###');
            console.log(state.temp);
          }
        })

        axios
            .delete(
                `/api/cart/deleteById?userId=${this.state.userId}&cartId=${this.state.temp}`
            )
            .then((response) => {
              console.log("购物车删除成功,返回值为:");
              console.log(response);
              state.myCart=response.data;
            })


        axios.post(
            `/api/cart/add?userId=${this.state.userId}&goodsId=${item.id}&&num=${item.count}&price=${item.price1}`
        )
            .then((response) => {
              console.log("购物车物品添加成功,返回值为:");
              console.log(response);
              state.myCartID=[];
              state.myCart=response.data;
              response.data.forEach((item)=>{
                state.myCartID.push(item.cardid);
              })
              // state.myCartID = response.data[0].cardid;
              console.log(state.myCart);
            })
      }



    });
  },
  changeMin(id) {
    state.items.forEach((item) => {
      if (item.id === id) {
        item.count = item.count - 1;
        console.log(item.count);
      }
    });
  },
  changeOrder(context, myOrder) {
    state.order = myOrder;
    // console.log(my);
  },
};
const state = {
  drawer: false,
  items: [],
  favourite: [],
  order: [],
  userId: "",
  myOrders: [],
  myCartID: [],
  myCart:[],
  temp:'',
};

export default new Vuex.Store({
  actions, //简写形式
  mutations,
  state,
});