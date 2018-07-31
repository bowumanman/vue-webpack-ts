<template>
  <div class="container">
    <div>
        <div class="container-menu">
          <div class="container-logo"><img src="~__assets/images/logo.png" /></div>
          <el-menu
            :default-active="activeMenu"
            class="el-menu cms-menu"
            background-color="#2d3554"
            text-color="#d0d4df"
            :unique-opened="true"
            active-text-color="#fff">
            <el-menu-item index="home-index" >  
              <i class="fa fa-home"></i>
              <span slot="title" @click="clickMenu('home-index', '我的主页')">我的主页</span>
            </el-menu-item>
            <!--个人信息-->
            <el-submenu index="personal">
              <template slot="title">
                <i class="fa fa-user"></i>
                <span>个人信息</span>
              </template>
              <el-menu-item index="personal-info">
                <span @click="clickMenu('about', '个人资料')">个人资料</span>
              </el-menu-item>
              <el-menu-item index="change-password">
                <span @click="clickMenu('about', '修改密码')">修改密码</span>
              </el-menu-item>
              <el-menu-item index="login">
                <span @click="clickMenu('login', '我的主页')">退出登录</span>
              </el-menu-item>
            </el-submenu>
            <!--个人信息 end-->
          </el-menu>
      </div>
      <div class="container-main">
        <div class="container-right">
          <div class="cms-tab-nemu">
            <cms-tab-menu ref="tabMenu"></cms-tab-menu>
          </div>
          <div class="m-l-20 m-r-20 bg_fff">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>  
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import TabMenu from '../../components/tab-menu/index.vue';
import Breadcrumb from '../../components/breadcrumb/index.vue';
@Component({
  components: {
    'cms-tab-menu': TabMenu,
    'cms-breadcrumb': Breadcrumb
  }
})
export default class Menu extends Vue {
  // 初始化数据
  public activeMenu: string = '';
  public $refs: {
    tabMenu: HTMLFormElement;
  };
  public clickMenu(url: string, name: string) {
    if (url === 'login') {
      this.$router.push({ name: 'login' });
      return;
    }
    this.$refs.tabMenu.addTab({ url, name });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container-menu{
  width:170px;
  position: fixed;
  left:0;
  top:0;
  bottom:0;
  right:0;
  overflow-y:auto;
  background:#2d3554;
  z-index:3;
}
.container-main{
  background:#f4f7fe;
  position: absolute;
  top:0;
  bottom:0;
  left:170px;
  right:0;
  overflow:auto;
  min-width:1110px;
}
.bg-f5f7fd{
  background:#f5f7fd;
}
.el-menu{
  border-right:0;
}
.container-right{
  margin:10px;
  border:1px solid #d1dbe5;
  box-shadow:0 2px 4px 0 rgba(0,0,0,.12), 0 0 6px 0 rgba(0,0,0,.04);
  background:#fff;
}
.cms-router-view, .cms-router-view-no-p{
  background:#fff;
  padding:20px;
  min-height:170px;
}
.cms-router-view-no-p{
  padding:0;
}
.container-header{
  height:60px;
  background:#f5f7fd;
  text-align:center;
}
.container-header p{
  color:#67c23a;
  font-size:13px;
  line-height:60px;
  display:inline-block;
}
.container-user{
  margin:15px 20px;
  cursor: pointer;
}
.userinfo-inner img{
  width:30px;
  height:30px;
  border-radius:50%;
  float:left;
  margin-right:10px;
}
.userinfo-inner span{
  float:left;
  line-height:30px;
  color:#fff;
}
.fa-angle-down {
  margin-left:30px;
}

</style>
