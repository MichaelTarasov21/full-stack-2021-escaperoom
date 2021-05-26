<template>
  <div >
    <h1 class="alert">Are you sure?</h1>
    <br>
    <button><div @click="logOut()">YES</div></button>
  </div>
</template>

<script>

import firebase from "firebase/app";

export default {
  name: "LogOut",
  props: {
    msg: String,
  },
  methods: {
    logOut: function () {
      firebase
        .auth()
        .signOut()
        .then(() => {
          // Sign-out successful.
          console.log("signed out")
          window.location.reload();
        })
        .catch((error) => {
          // An error happened.
          console.log(error)
        });
    },
  },
};
</script>

<style scoped>
.alert {
  background-color: rgb(202, 90, 62);
}
h1 {
  font-size: 5rem, bolder;
}

button {
  color: black !important;
  text-align: center;
  font-size: 1rem;
  cursor: pointer;
  border: solid 2pt  rgb(56, 99, 61);
    background-color: rgb(78, 255, 187);
}

button:hover {
  background-color: rgb(56, 99, 61);
  color: white !important;
  transition: 0.1s;
}
</style>