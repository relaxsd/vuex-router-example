import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.config.debug = true;

// This was moved to App.vue
// new Vue({
//     store,
//     el: 'body',
//     components: { App }
// });

// Instead of this code, we'll use our Vue App
// var App = Vue.extend({});
import App from './App.vue';

var Bar = Vue.extend({
    template: '<p>This is bar!</p>'
})

// Install the router
Vue.use(VueRouter);

// Create a router instance.
// You can pass in additional options here, but let's
// keep it simple for now.
var router = new VueRouter()

import CountersPage from './CountersPage.vue';

// Define some routes.
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// Vue.extend(), or just a component options object.
// We'll talk about nested routes later.
router.map({
    '/counters': {
        component: CountersPage
    },
    '/bar': {
        component: Bar
    }
})

// Now we can start the app!
// The router will create an instance of App and mount to
// the element matching the selector #app.
router.start(App, '#app')
