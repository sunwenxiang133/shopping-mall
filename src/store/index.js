//创建Vuex中的store
import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

const actions = {
    text(context, value) {
        context.commit('TEXT', value);
        console.log(context);
    },
};
const mutations = {
    setItem(context,items){
        // console.log(items);
        context.items=items;
    },
    changeState(context,id){
        // console.log(context.items);
        state.items.forEach((item)=>{
            if(item.id===id){
                Vue.set(item,'love',false);
                item.love=!item.love;
                Vue.set(item,'count',1);
                // console.log(item);
            }
        })
        state.favourite = state.items.filter((item)=>{
            if(item.love===true){
                return item;
            }
        })
        console.log(state.favourite);
    },
    changeAdd(context,myItem){
        // console.log(myItem);
        state.items.forEach((item)=>{
/*            console.log(myItem);
            console.log(item.id);*/
            if(item.id===myItem){
                item.count=item.count+1;
            }
        })
    },
    changeMin(id){
        state.items.forEach((item)=>{
            if(item.id===id){
                item.count=item.count-1;
                console.log(item.count);
            }
        })
    }
};
const state = {
    drawer:false,
    items:[],
    favourite:[],
};

export default new Vuex.Store({
    actions, //简写形式
    mutations,
    state,
});