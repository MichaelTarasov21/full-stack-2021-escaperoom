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
// import func from "../../vue-temp/vue-editor-bridge";
export default {
  name: "login",
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

          this.checkLogIn();
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
          console.log(user);

          const loginPage = document.querySelector(".login");
          loginPage.style.display = "none";

          const welcome = document.querySelector("#welcome");
          welcome.innerHTML = `Welcome ${user.displayName}`;
        
        } else {
          // No user is signed in.
          console.log("not loggin in");
        }
      });
    },
  },

  //check if logged in on load
  mounted: function () {
    this.checkLogIn();
  },
};
</script>

<style scoped>
.login {
  width: 100%;
  height: 100%;
  background-color: black;
  background-image: url(../img/login.jpg);
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
