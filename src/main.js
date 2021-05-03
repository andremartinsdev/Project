import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import VueSidebarMenu from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
import router from './routes'
import store from './store'
import VueSweetalert2 from 'vue-sweetalert2';
import money from 'v-money'
import VueHtmlToPaper from 'vue-html-to-paper';


// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css';
import VueMask from 'v-mask'

const options = {
  specs: [
    'fullscreen=yes',
    'titlebar=yes',
    'scrollbars=yes'
  ],
  styles: [
    'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css',
    'https://unpkg.com/kidlat-css/css/kidlat.css'
  ]
}

Vue.use(VueHtmlToPaper, options);

// or, using the defaults with no stylesheet
Vue.use(VueHtmlToPaper);
Vue.use(VueMask);
Vue.use(VueSweetalert2);

Vue.use(VueSidebarMenu)
Vue.use(money, { precision: 2 })
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.config.productionTip = false


new Vue({
  store,
  render: h => h(App),
  router

}).$mount('#app')
