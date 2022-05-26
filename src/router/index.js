import VueRouter from "vue-router";
import ShoppingPage from "@/components/ShoppingPage";
import ShoppingBody from "@/components/ShoppingBody";
// import ShoppingItem from "@/components/ShoppingItem";
import UserLogin from "@/components/UserLogin";
// import ShoppingCart from "@/components/ShoppingCart";
import ShoppingOrder from "@/components/ShoppingOrder";


export default new VueRouter({
    routes:[
        {
            path:'/ShoppingPage',
            component:ShoppingPage
        },
        {
            path:'/ShoppingBody',
            component:ShoppingBody
        },
        {
            path:'/ShoppingOrder',
            component:ShoppingOrder
        },
        {
            path:'/UserLogin',
            component:UserLogin
        }
        /*{
            path:'/UserLogin',
            component:UserLogin
        }*/
    ]
})