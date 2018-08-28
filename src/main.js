import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import * as fb from 'firebase'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created () {
    fb.initializeApp({
      apiKey: 'AIzaSyA1WSQvb0BpVyROAMF1t7HxyMajFXhM4F8',
      authDomain: 'itc-ads-798d0.firebaseapp.com',
      databaseURL: 'https://itc-ads-798d0.firebaseio.com',
      projectId: 'itc-ads-798d0',
      storageBucket: 'itc-ads-798d0.appspot.com',
      messagingSenderId: '453716106686'
    })
    fb.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoLoginUser', user)
      }
    })

    this.$store.dispatch('fetchAds')
  }
})
