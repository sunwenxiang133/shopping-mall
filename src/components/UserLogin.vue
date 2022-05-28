<template>
  <div class="body">
    <el-form ref="loginForm" :model="form" :rules="rules" label-width="80px" class="login-box">
      <h3 class="login-title">欢迎登录</h3>
      <el-form-item label="账号" prop="username">
        <el-input type="text" placeholder="请输入账号" v-model="form.username"/>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" placeholder="请输入密码" v-model="form.password"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" v-on:click="onSubmit()">注册</el-button>
        <el-button type="primary" v-on:click="onLogin()">登陆</el-button>
      </el-form-item>
    </el-form>

    <el-dialog
        title="温馨提示"
        :visible.sync="dialogVisible"
        width="30%"
        >
      <span>请输入账号和密码</span>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "UserLogin",
  data() {
    return {
      form: {
        username: '',
        password: ''
      },

      // 表单验证，需要在 el-form-item 元素中增加 prop 属性
      rules: {
        username: [
          {required: true, message: '账号不可为空', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '密码不可为空', trigger: 'blur'}
        ]
      },

      // 对话框显示和隐藏
      dialogVisible: false
    }
  },
  methods: {
    onLogin(){
      axios.get("/api/user/login",{
        params:{
          name:this.form.username,
          password:this.form.password,
        }
      }).then((response)=>{
        if(response.data==='invalid'){
          window.alert('登陆失败');
        }
        else if(response.data){
          window.alert('登陆成功');
          this.$router.push("/ShoppingBody");
          this.$bus.$emit('handleActive');
          this.$store.state.userId=response.data;
          console.log('111');
          console.log(response.data);

          this.$axios.get('api/cart/listByUser',{
            params:{
              userId:this.$store.state.userId
            }
          }).then((response)=>{
            console.log('购物车请求成功');
            console.log('333');
            console.log(this.$store.state.userId);
            console.log(response.data);
            this.$store.state.myCart=response.data;
            console.log(this.$store.state.favourite);
            //把请求到的购物车数据给商城
            this.$store.state.myCart.forEach((item)=>{
              this.$store.state.items.forEach((itemF)=>{
                if(item.name===itemF.name){
                  this.$store.state.favourite.push(itemF);
                  this.$store.commit('changeState',itemF.id);
                }
              })
            })
          }).catch((response)=>{
            console.log(response);
          })
        }
      })
      console.log('222');
      console.log(this.$store.state.userId);


    },
    onSubmit() { //formName
      // 为表单绑定验证功能
      axios.get("/api/user/register",{
        params:{
          name:this.form.username,
          password:this.form.password,
        }

      }).then((response)=>{
        if(response.data==='OK'){
         window.alert('注册成功，返回值为'+response.data);
        }else{
          window.alert('用户已存在');
        }
      })
      /*this.$refs[formName].validate((valid) => {
        if (valid) {
          // console.log("http://localhost:8080/api/"+'?'+'name'+this.username+'&password='+this.password);
          // 使用 vue-router 路由到指定页面，该方式称之为编程式导航
          this.$router.push("/ShoppingBody");
        } else {
          this.dialogVisible = true;
          return false;
        }
      });*/
    }
  }
}
</script>

<style scoped>
.login-box {
  border: 1px solid #DCDFE6;
  width: 350px;
  margin: 180px auto;
  padding: 35px 35px 15px 35px;
  border-radius: 5px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  box-shadow: 0 0 25px #909399;
}

.login-title {
  text-align: center;
  margin: 0 auto 40px auto;
  color: #303133;
}
.body{
  /*background-image:url("");*/
}
</style>