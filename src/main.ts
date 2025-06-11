import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router/index'
import axios from 'axios'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'


// 使用typeof返回类型
declare module 'vue' {
  interface ComponentCustomProperties {
    $http: typeof axios
  }
}
const app = createApp(App)
app.use(ElementPlus);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.config.errorHandler = (err) => {
  /* 全局处理错误 */
  console.log(err)
}
app.config.globalProperties.msg = function () {
  console.log('msg')
};

app.use(createPinia())
app.use(router)

// 该方法接收一个“容器”参数，可以是一个实际的 DOM 元素或是一个 CSS 选择器字符串
// 应用根组件的内容将会被渲染在容器元素里面。容器元素自己将不会被视为应用的一部分。
// 可以多应用实例挂载
// .mount() 方法应该始终在整个应用配置和资源注册完成后被调用。同时请注意，不同于其他资源注册方法，它的返回值是根组件实例而非应用实例。
app.mount('#app')