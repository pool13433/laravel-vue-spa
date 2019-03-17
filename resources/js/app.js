import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import App from './components/App.vue'

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: { template: '<div>Home Page</div>' }
        },
        {
            path: '/hello',
            name: 'hello',
            component: { template: '<div>Hello Page</div>' }
        },
         {
            path: '/laravel',
            name: 'laravel',
            component: { template: '<div>Laravel Page</div>' }
        },
        {
            path: '/webpack',
            name: 'webpack',
            component: { template: '<div>Webpack Page</div>' }
        },
    ],
});

const app = new Vue({
    el: '#app',
    components: { App },
    router,
});