import Vue from 'vue'
import App from './App.vue'
import router from './router'
import start from './qiankun/index.js'
Vue.config.productionTip = false
new Vue({
    router,
    render: h => h(App)
}).$mount('#app')

start();