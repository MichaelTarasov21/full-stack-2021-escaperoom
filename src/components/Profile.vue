<template>
  <div class="profile-info">
    <h1>Profile</h1>
    <h3 id="name" > </h3>
    <h3 id="email" > </h3>
    <!-- <h3 id="joinDate" > </h3> -->
  </div>
</template>

<script>
import firebase from "firebase/app";
export default {
  name: "Profile",
  props: {
    msg: String,
  },
  methods: {
    checkLogIn: function () {
      firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
          const name = document.querySelector("#name");
          name.innerHTML = `Logged in as: ${user.displayName}`;

          const email = document.querySelector('#email');
          email.innerHTML = `Email: ${user.email}`;

          // const joinDate = document.querySelector('#joinDate');
          // joinDate.innerHTML = `Account Created: ${user.email}`;
        }
      });
    },
  },

    created: function () {
    this.checkLogIn()
  }

};
</script>

<style>

</style>