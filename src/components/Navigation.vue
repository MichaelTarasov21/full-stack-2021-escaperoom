<template>
  <div class="login">
    <h3>Escape Room</h3>
    <button><h3>Sign In</h3></button>
  </div>
</template>

<script>
// Initialize Firebase
import firebase from "firebase/app";
import "firebase/auth";
//import func from "../../vue-temp/vue-editor-bridge";
export default {
  name: "navigation",
  props: {
    // msg: String
  },
  methods: {
    signInWithPopup: function() {
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
          console.log(result);
          /** @type {firebase.auth.OAuthCredential} */
          //var credential = result.credential;
          // This gives you a Google Access Token. You can use it to access the Google API.
          //var token = credential.accessToken;
          // The signed-in user info.
          //var user = result.user;
          // ...
        })
        .catch((error) => {
          console.log(error);
          // Handle Errors here.
          // var errorCode = error.code;
          //var errorMessage = error.message;
          // The email of the user's account used.
          //var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          // var credential = error.credential;
          // ...
        });
    },
  },
  //signInWithPopup();
};

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
/* var firebaseConfig = {
  apiKey: "AIzaSyAMHt38VEtOh7ggYRQLQooixyo08wxUhGc",
  authDomain: "escape-room-project-677cd.firebaseapp.com",
  projectId: "escape-room-project-677cd",
  storageBucket: "escape-room-project-677cd.appspot.com",
  messagingSenderId: "440341783920",
  appId: "1:440341783920:web:0aa7dcc75245ad05481bb5",
  measurementId: "G-VKNQM8049J",
}; */

//

// provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
</script>
