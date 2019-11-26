import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './routes'
import Axios from 'axios'




Vue.config.productionTip = false

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(Axios);


const router = new VueRouter({
    routes: Routes,
    // mode: 'history'
});



new Vue({
  vuetify,
  router: router,
  render: h => h(App)
}).$mount('#app')
