/*
* @Author: zhangsai
* @Date: 2018/4/3
* @description:  路由配置 注意按照原型menu的顺序排列 首页、信息处理、事件管理、信息管理、系统配置。写好备注
*/
import Vue from 'vue';
import store from '../store';
import Router from 'vue-router';
import { LOCAL_USER } from '../store/user';
Vue.use(Router);
const routes = [
  {
    path: '/login',
    name: 'login',
    meta: { },
    component: () => import('@/views/login/index.vue'),
  },
  {
    path: '/menu',
    name: 'menu',
    meta: { menu: 'menu'},
    component: () => import('@/views/menu/index.vue'),
    children: [
      {
        path: '/home-index',
        name: 'home-index',
        meta: { menu: 'menu', showTab: true },
        component: () => import('@/views/home-index/index.vue'),
      },
      {
        path: '/about',
        name: 'about',
        meta: { menu: 'menu', showTab: true },
        component: () => import('@/views/about/index.vue'),
      },
    ]
  },
  {
    path: '*',
    name: '*',
    component: () => import('@/views/login/index.vue')
  }
];

const router: any = new Router({
  mode: process.env.NODE_ENV === 'development' ? 'history' : 'hash',
  base: __dirname,
  scrollBehavior: (to, from, savedPosition) => {
    return savedPosition || {
        x: 0,
        y: 0
    };
  },
  routes
});

router.beforeEach(async (to: any, from: any, next: any) => {
  // tslint:disable-next-line:no-any
  const state: any = store.state;
  const token: string | undefined = state.user.token;
  if (to.name === 'login' || to.path === '/login') {
    store.dispatch('singOut');
    next();
    return;
  } 
  if ( token ) {
    // 判定内存和local 是否一致 不一致说明,登录了新用户,强制登出
    if (!isLocalStorageUser()) {
      next({
          path: 'login'
      });
    }
    if (to.meta.openWindow) {
      let openUrl = to.fullPath;
      if (to.params.openWindow === 'false') {
        next();
        return;
      } 
      if (router.mode === 'hash') {
        openUrl = window.location.protocol + '//' + window.location.host + window.location.pathname + '#' + to.fullPath;
      }
      window.open(openUrl, '_blank');
      return;
    } else {
      next();
    }
  } else {
    const retUser = await store.dispatch('refreshUser');
    if ( retUser ) {
      store.commit('SIGN_IN', retUser);
      await store.dispatch('refreshFieldList');
      next();
    } else {
      next({ path: 'login' });
    }
  }
  if (to.name === '*') {
    next({ name: 'login' });
  } else {
    next();
  }
});
// 判定内存和local 是否一致
const isLocalStorageUser = () => {
  const user = localStorage.getItem(LOCAL_USER);
  // tslint:disable-next-line:no-any
  const state: any = store.state;
  return user === null ? true : (state.user.token === JSON.parse(user).token);
};
export default router;
