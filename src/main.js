import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';

Vue.use(VueRouter);

Vue.config.productionTip = true


import homePage from './components/pages/index'
import lifePage from './components/pages/life'
import aboutPage from './components/pages/about_us'



const router = new VueRouter({
  routes: [
    { path: '/', component: homePage },
    { path: '/life', component: lifePage },
    { path: '/about', component: aboutPage },
  ]
});




new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
