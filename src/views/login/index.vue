/*
* @Author: zhangsai
* @Date: 2018/4/3
* @description:  登录
*/
<template>
   <div class="ca-login-content">
        <div class="ca-login__margin-auto" >
            <div class="ca-login__panel">
                <div class="m-b-28"><img class="cms-login-title" src="~__assets/images/cms-login-logo.png" /></div>
                <h3 class="align-center m-b-20">管理系统</h3>
                <el-form ref="loginForm" :rules="rules" :model="form" >
                    <el-form-item prop="username" class="cms-login-form">
                        <el-input placeholder="用户名"
                                  v-model="form.username" @input="userNameChange"
                                  class="cms-login-user">
                        </el-input>
                    </el-form-item>
                    <el-form-item prop="password" class="cms-login-form">
                        <el-input type="password" placeholder="密码" v-model="form.password" class="cms-login-lock">
                        </el-input>
                    </el-form-item>
                    <div class="m-t-20 ca-login--submit">
                        <el-button type="primary" :loading="loginLoading" @click="onSubmit()" @keyup.enter="onSubmit('loginForm')">登&nbsp;&nbsp;录</el-button>
                    </div>
                </el-form>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import BaseService from '../../service/common';
import { TAB_MENU_LIST, TAB_MENU_CURR_INDEX } from '../../store/user'; 
interface LoginForm {
  username: string;
  password: string;
  grant_type: string;
}
@Component({
  components: {
  }
})
export default class Login extends Vue {
  // 初始化数据 相当于data
  public loginLoading: boolean = false; // 登录按钮加载中效果
  public rememberPassword: boolean = false; // 记住密码选项
  public form: LoginForm = {
    username: '',
    password: '',
    grant_type: 'password'
  };
  // 验证规则
  public rules = {
    username: [ { required: true, message: '请输入用户名', trigger: 'blur' } ],
    password: [ { required: true, message: '请输入密码', trigger: 'blur' } ],
  };
  public loading: boolean = false;
  // refs
  public $refs: {
    loginForm: HTMLFormElement
  };
  public userNameChange() {
    this.form.password = '';
  }
  // 生命周期钩子
  public mounted() {
    document.addEventListener('keyup', this.onKeyUp);
  }
  public beforeDestroy() {
    document.removeEventListener('keyup', this.onKeyUp);
  }
  public onKeyUp(event: {keyCode: number}) {
      if (event && event.keyCode === 13) { // enter 键
        this.onSubmit();
      }
  }
 
  // 方法
  public onSubmit() {
    this.$refs.loginForm.validate(async (valid: boolean) => {
      if (valid) {
        this.loginLoading = true; // 登录按钮 加载中
        this.loading = true;
        const res: {access_token?: string | undefined; uid?: string | undefined} = await BaseService.login(this.form);
        if (res.access_token) {
          // 如果登录成功，则把账号信息保存在cookie当中  end

          await this.$store.dispatch('signIn', {token: res.access_token});
          const dictionary = await BaseService.getDictionaries();
          const store = {
            uid: res.uid,
            token: res.access_token,
            dictionary,
          };
          await this.$store.dispatch('signIn', store);
          this.loading = false;
          this.loginLoading = false;
          localStorage.setItem(TAB_MENU_LIST, JSON.stringify([{name: '我的主页', url: 'home-index'}]));
          localStorage.setItem(TAB_MENU_CURR_INDEX, '0');
          this.$router.push({ name: 'home-index' });
        }
        this.loading = false;
        this.loginLoading = false; // 登录按钮 加载中
      }
    });
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.remColor{
    color: #fff;
}
.m-t-28{
   margin-bottom: 28px;
}
 .ca-login-content {
        position: absolute;
        width:100%;
        top:0;
        left:0;
        right:0;
        bottom:0;
        min-height:450px;
        background: #4c84ff url(~__assets/images/login-bg.jpg) center no-repeat ;
        background-size: 100% auto;
    }
    .cms-login-title{
        height:26px;
        width:81px;
        margin-bottom:15px;
    }
    .cms-login-cms{
        height:19px;
        width:55px;
    }
    .ca-login__margin-auto {
        width: 363px;
        position: absolute;
        top:15%;
        left:50%;
        bottom:15%;
        margin-left:-182px;
    }

    .ca-login__logo {
        text-align: center;
        margin: 60px 0 0 0;
    }

    .ca-f-s-30 {
        font-size: 26px !important;
        color: #fff;
        font-weight: normal;
    }

    .ca-login__panel {
        background: rgba(0,0,0,.5);
        padding: 28px 29px 81px 29px;
        box-shadow: 0 8px 10px rgba(0, 0, 0, .2);
        border-radius: 5px;
    }
    .ca-login__panel h3{
        color:#fff;
        font-size:19px;
        font-family: SimHei;
    }
    .ca-login__panel h3 img{
        margin-right:10px;
        vertical-align: middle;
        margin-top:-3px;
    }
    .ca-login__footer {
        color: #404040;
        text-align: center;
        margin-top: 30px;
    }

    .ca-checkbox-text {
        /*color: #eaeaea;*/
        color: #fff;
        font-weight: bold;
    }

    .ca-login-dialog__content p {
        line-height: 26px;
    }
     h3{
        line-height: 36px;
    }
</style>
