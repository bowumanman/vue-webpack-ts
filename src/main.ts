import Vue from 'vue';
import App from './App.vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router';
import store from './store';
import filters from './filters';

Vue.config.productionTip = false;
Vue.use(ElementUI);
// 注册过滤器
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]);
});
Vue.prototype.$showTab = true;
// 自定义指令 弹框拖动
Vue.directive('drag', (el) => {
  const oDiv: any = el.children[0];
  const oHeader: any = oDiv.children[0];
  oHeader.onmousedown = (ev) => {
      const disX = ev.clientX - oDiv.offsetLeft;
      const disY = ev.clientY - oDiv.offsetTop;
      // tslint:disable-next-line:no-shadowed-variable
      document.onmousemove = (ev) => {
        const l = ev.clientX - disX;
        const t = ev.clientY - disY;
          oDiv.style.left = l + 'px';
          oDiv.style.top = t + 'px';
      };
      document.onmouseup = () => {
          // tslint:disable-next-line:no-empty
          document.onmousemove = () => {};
          // tslint:disable-next-line:no-empty
          document.onmouseup = () => {};
      };
  };
});
const app: Vue = new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
export default app;
