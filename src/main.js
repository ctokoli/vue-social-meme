import Vue from 'vue';
import App from './App.vue';
import firebase from 'firebase';
import Router from 'vue-router';
import router from './router'



Vue.use(Router);

const routers = new Router({router});

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false

new Vue({
  routers,
  render: h => h(App),
}).$mount('#app')
