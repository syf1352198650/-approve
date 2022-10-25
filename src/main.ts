import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/assets/css/index.css'
import { createPinia} from 'pinia'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import "./permission"
const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(ElementPlus).use(createPinia()).use(router).mount('#app')
