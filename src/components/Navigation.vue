<template>
  <div class="login">
    <h3>Escape Room</h3>
    <button onclick="signInWithPopup"><h3>Sign In</h3></button>
  </div>
</template>

<script>
export default {
  name: "navigation",
  props: {
    // msg: String
  },
};
</script>

<script>
firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
</script>

