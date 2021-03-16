<template>
  <div>
    <h1 class="alert">Are you sure?</h1>
    <button><div @click="logOut()">Yes</div></button>
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
  font-size: 1.5rem;
}
</style>