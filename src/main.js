// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import "babel-polyfill";
import Vue from 'vue'
import App from './App'
import Axios from './assets/js/axios'
import Tool from './assets/js/tool'
import {
  Button,
  Form,
  FormItem,
  Input,
  Dialog,
  Message
} from 'element-ui';

Vue.use(Button);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Dialog);
Vue.prototype.$message = Message;
Vue.config.productionTip = false;
Vue.prototype.$Axios = Axios;
Vue.prototype.$Tool = Tool;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {App},
  template: '<App/>'
});
