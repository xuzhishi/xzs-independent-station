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


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgak-xzgUXr4ZuMGbdSwD44kdihNbHov4",
  authDomain: "xdtx-6abd1.firebaseapp.com",
  projectId: "xdtx-6abd1",
  storageBucket: "xdtx-6abd1.appspot.com",
  messagingSenderId: "940045795554",
  appId: "1:940045795554:web:fb30faf1328c0bb7845ebb",
  measurementId: "G-0C47JV62E2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);


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
