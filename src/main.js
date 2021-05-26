import firebase from "firebase";
import Vue from 'vue'
import App from './App.vue'

require('dotenv').config()

var firebaseConfig = {
  apiKey: process.env.VUE_APP_API_KEY,
  authDomain: "escape-room-project-677cd.firebaseapp.com",
  projectId: "escape-room-project-677cd",
  storageBucket: "escape-room-project-677cd.appspot.com",
  messagingSenderId: "440341783920",
  appId: "1:440341783920:web:0aa7dcc75245ad05481bb5",
  measurementId: "G-VKNQM8049J",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.auth();

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
