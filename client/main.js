import Vue from 'vue';
import { Meteor } from 'meteor/meteor';
import Router from 'vue-router';

// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.css'; // optional, default theme
// import '@fortawesome/fontawesome-free/js/all.js'; // optional, is using FA5
// import 'bootstrap-icons';

import popper from 'popper.js';

global.Popper = popper;

import '../imports/ui/plugins';

import AppComponent from '../imports/ui/App.vue';

Meteor.startup(() => {
  Vue.use(Router);

  const router = new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        name: 'home',
        component: () => import('../imports/ui/components/HomeComponent.vue'),
      },
      {
        path: '/about',
        name: 'about',
        component: () => import('../imports/ui/components/AboutComponent.vue'),
      },
      {
        path: '/login',
        name: 'login',
        component: () => import('../imports/ui/components/LoginComponent.vue'),
      },
      {
        path: '/logout',
        name: 'logout',
        component: () => import('../imports/ui/components/LogoutComponent.vue'),
      },
      {
        path: '/admin',
        name: 'admin',
        component: () => import('../imports/ui/components/AdminComponent.vue'),
      },
      {
        path: '*',
        name: 'notfound',
        component: () =>
          import('../imports/ui/components/NotFoundComponent.vue'),
      },
    ],
  });

  new Vue({
    render: (h) => h(AppComponent),
    router,
  }).$mount('main');
});

// Meteor.startup(() => {
//   new Vue({
//     el: '#app',
//     ...App,
//   });
// });
