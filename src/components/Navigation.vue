<template>
  <div class="login">
    <h3>Escape Room</h3>
    <button onclick="signIn"><h3>Sign In</h3></button>
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
var provider = new firebase.auth.GoogleAuthProvider();

function signin(){

  firebase.auth().signInWithPopup(provider).then(function(result) {

  var token = result.credential.accessToken;
  var user = result.user;

}).catch(function(error) {

  var errorCode = error.code;
  var errorMessage = error.message;
  var email = error.email;
  var credential = error.credential;

}); 
}
</script>

