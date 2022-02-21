import Vue from 'vue'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)
// 引入各个语言配置文件
import zh from './lang/zh';
import en from './lang/en';
// 创建vue-i18n实例i18n

export const i18n = new VueI18n({
  locale: 'zh-CN',    // 语言标识
  //this.$i18n.locale // 通过切换locale的值来实现语言切换
  messages: {
    'zh-CN': zh,   // 中文语言包
    'en-US': en    // 英文语言包
  }
})
// const i18n = new VueI18n({
//     // 设置语言
//     locale: localStorage.getItem('locale') || 'zh',
//     messages:{
//         zh,
//         en,
//     }
// })
// export default i18n;