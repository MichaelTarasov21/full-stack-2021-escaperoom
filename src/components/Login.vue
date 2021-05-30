<template>
  <div class="login">
    <div class="login-content">
      <header><h1>Random Escape Room!</h1></header>
      <button><div @click="signIn()">SIGN IN</div></button>
    </div>
  </div>
</template>

<script>
  // Initialize Firebase
  import firebase from "firebase/app";
  import "firebase/auth";
  export default {
    name: "login",
    methods: {
      signIn: function() {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase
          .auth()
          .signInWithPopup(provider)
          .then(() => {
            /** @type {firebase.auth.OAuthCredential} */

            this.checkLogIn();
          })
          .catch((error) => {
            console.log(error);
          });
      },

      checkLogIn: function() {
        firebase.auth().onAuthStateChanged(function(user) {
          if (user) {
            // User is signed in.
            const loginPage = document.querySelector(".login");
            loginPage.style.display = "none";

            const welcome = document.querySelector("#welcome");
            welcome.innerHTML = `Welcome ${user.displayName}`;
          }
        });
      },
    },

    //check if logged in on load
    mounted: function() {
      this.checkLogIn();
    },
  };
</script>

<style scoped>
  .login {
    width: 100%;
    height: 100%;
    background-color: black;
    background-image: url(~@/assets/Images/login.jpg);
    background-size: 100%;
    color: white;
    z-index: 2;
    position: fixed;
    display: table;
    font-family: "Mystery Quest", cursive !important;
  }

  .login-content {
    display: table-cell;
    vertical-align: middle;
    font-size: 3rem;
    padding: 3rem;
  }

  button {
    border: 2pt solid rgb(251, 255, 233);
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
  }

  button:hover {
    /* background-color: rgb(0, 0, 0); */
    background-color: rgb(251, 255, 233);
    color: black;
  }

  /* button {
    font-family: 'Mystery Quest', cursive !important;
} */
</style>
