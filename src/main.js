import Vue from 'vue';
import App from './App.vue';
import Header from './Components/Header_footer/Header.vue'
import Footer from './Components/Header_footer/Footer.vue';
import OdrHistory from './Components/OdrHistory.vue';
import OdrSend from './Components/OdrSend.vue';
import OrderDetail from './Components/OrderDetail.vue';
import VueRouter from 'vue-router';

import {routes} from './routes';

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'

Vue.use(VueMaterial)
Vue.use(VueRouter);

Vue.component('app-header',Header)
Vue.component('app-footer',Footer)
Vue.component('app-history',OdrHistory)
Vue.component('app-OdrSend',OdrSend)
Vue.component('app-orderDetail',OrderDetail)

const router = new VueRouter({
    routes
});

new Vue({
    el:'#app',
    router,OdrHistory,
    render: h => h(App)
});


