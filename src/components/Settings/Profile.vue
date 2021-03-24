<template>
  <div>
    <h1 class="profile">Profile</h1>
    <div class="profile-info">
      <h3 id="name"></h3>
      <h3 id="email"></h3>
      <h3 id="room1" ></h3>
      <h3 id="room2" ></h3>
      <h3 id="room3" ></h3>
      <h3 id="room4" ></h3>
      
    </div>
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

          const email = document.querySelector("#email");
          email.innerHTML = `Email: ${user.email}`;

          const room1 = document.querySelector("#room1");
          room1.innerHTML = `Email: ${user.email}`;
        }
      });
    },
  },

  created: function () {
    this.checkLogIn();
  },
};
</script>

<style >
.profile {
  background-color: yellow;
}

.profile-info {
  text-align: left;
}
</style>