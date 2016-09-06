import Vue from 'vue'
import VueRouter from 'vue-router'
import path from 'path'
import vHeader from './components/public/Header.vue'
import vNav from './components/public/Nav.vue'
import Index from './components/Index.vue'
import Posts from './components/Posts.vue'
import Tags from './components/Tags.vue'
import System from './components/System.vue'


Vue.use(VueRouter)

const router = new VueRouter({
//   mode: 'hashbang',
//   base: path.join(__dirname,'src'),
    base:'admin',
  routes: [
    { path: '/', component: Index },
    { path: '/posts', component: Posts },
    { path: '/tags', component: Tags },
    { path: '/system', component: System },
  ]
})

// 4. Create and mount root instance.
// Make sure to inject the router.
// Route components will be rendered inside <router-view>.
new Vue({
  router,
  components:{
      vHeader,
      vNav,
  },
  template: `
    <div id="app">
      <div id="app-container">
        <vNav></vNaV>
        <div class="main-container">
            <vHeader></vHeader>
            <router-view class="view"></router-view>
        </div>
      </div>
    </div>
  `
}).$mount('#app-top')
