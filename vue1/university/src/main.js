import { createApp } from 'vue'
import App from './App.vue'
import routes from './router'
import store from './store'
import Axios from 'axios'
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'

// ------------------------element图标--------------------
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

// -----------------------axios---------------------------
const instance = Axios.create({
  baseURL: 'http://localhost:1338/users/',
  timeout: 5000
})

instance.interceptors.request.use(config => {
  //对config进行处理
  return config
});

instance.interceptors.response.use(res => { //响应拦截
  return res.data;
});

app.config.globalProperties.$axios = instance

// --------------------挂载其他模块-----------

app.use(store).use(routes).use(ElementPlus).mount('#app')
