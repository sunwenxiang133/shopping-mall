//创建Vuex中的store
import Vuex from "vuex";
import Vue from "vue";

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
  },
  changeState(context, id) {
    // console.log(context.items);
    state.items.forEach((item) => {
      if (item.id === id) {
        if (item.love) {
          item.love = false;
        } else {
          console.log(item.love);
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
    console.log(state.favourite);
  },
  changeAdd(context, myItem) {
    // console.log(myItem);
    state.items.forEach((item) => {
      /*            console.log(myItem);
                                                      console.log(item.id);*/
      if (item.id === myItem) {
        item.count = item.count + 1;
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
    console.log(my);
  },
};
const state = {
  drawer: false,
  items: [],
  favourite: [],
  order: [],
  userId: "",
  myOrders: [],
};

export default new Vuex.Store({
  actions, //简写形式
  mutations,
  state,
});