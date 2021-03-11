<template>
  <div class="login">
    <div class="login-content">
      <h1>Crazy Escape Room</h1>
      <button><div @click="signIn()">Sign In</div></button>
    </div>
  </div>
</template>

<script>
// Initialize Firebase

import firebase from "firebase/app";
import "firebase/auth";
// import func from "../../vue-temp/vue-editor-bridge";
export default {
  name: "navigation",
  props: {
    // msg: String
  },

  methods: {
    signIn: function () {
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
          /** @type {firebase.auth.OAuthCredential} */
          var credential = result.credential;

          // This gives you a Google Access Token. You can use it to access the Google API.
          var token = credential.accessToken;
          console.log(token);
          // The signed-in user info.
          var user = result.user;
          console.log(user);
          // ...
          
          firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
              // User is signed in.
              console.log("logged in");
              const loginPage = document.querySelector(".login");
              loginPage.style.display = "none";
            } else {
              // No user is signed in.
              console.log("not loggin in");
            }
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },

    checkLogIn: function () {
      firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
          // User is signed in.
          console.log("logged in");
          const loginPage = document.querySelector(".login");
          loginPage.style.display = "none";
        } else {
          // No user is signed in.
          console.log("not loggin in");
        }
      });
    },
  },
};
</script>

<style scoped>
.login {
  width: 100vw;
  height: 100vh;
  background-color: black;
  color: white;
  z-index: 1;
  position: absolute;
}

.login-content {
  padding: 3rem;
}

.hide {
  display: none;
}
</style>
