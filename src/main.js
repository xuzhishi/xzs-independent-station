import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 多语言插件的配置引入
import VueI18n from 'vue-i18n';
import "./assets/iconfont/iconfont.css"

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueI18n)





const i18n = new VueI18n({
  locale: 'zh-CN',    // 语言标识
  //this.$i18n.locale // 通过切换locale的值来实现语言切换
  messages: {
    'zh-CN': require('./i18n/lang/zh'),   // 中文语言包
    'en-US': require('./i18n/lang/en')    // 英文语言包
  }
})
//

new Vue({
  i18n,
  router,
  render: h => h(App)
}).$mount('#app')
