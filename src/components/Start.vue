<template>
  <div id="start">
    <section class="header">
      <h1 id="welcome"></h1>
      <h2>Some Directions</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum
        faucibus porta. Cras elementum porttitor odio, at consequat justo cursus
        vel. Maecenas finibus molestie enim, ullamcorper feugiat enim sagittis
        quis. Sed pulvinar urna eget lectus ultrices varius. Quisque consequat,
        purus sed semper interdum, leo justo ornare velit, blandit luctus magna
        diam in ex. Donec porta est at leo laoreet, maximus dictum sem molestie.
        Orci varius natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus. Sed lacinia lectus at neque tempus, nec semper justo
        efficitur.
      </p>
      <p>Are you up for the challenge?</p>
      <button id="begin" @click="hide()" ><div>Begin</div></button>
    </section>
    <!-- <button id="start">Start</button> -->
    <!-- <div class="btn-personals">
      <button id="leaderboard">Leaderboard</button>
      <button id="account">Account</button>
      <button id="logout">Log Out</button>
    </div> -->
  </div>
</template>

<script>
import firebase from "firebase/app";
export default {
  emits: ["Gamestarted"],
  name: "Start",
  methods: {
    checkLogIn: function() {
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          const welcome = document.querySelector("#welcome");
          welcome.innerHTML = `Welcome ${user.displayName}`;
        }
      });
    },
    hide: function() {
      const start = document.querySelector("#start");
      start.style.display = "none";
      this.$emit("Gamestarted");
    },
  },
};
</script>

<style>
#start {
  text-align: center;
  position: absolute;
  width: 100vw;
  height: 100vh;
}
.header {
  background-color: #b0b6b3;
  color: black;
  margin: 3rem;
  padding: 3rem;
}
button {
  background-color: white;
  color: black;
  width: 25%;
  text-align: center;
  font-size: 1rem;
  cursor: pointer;
}

#begin {
  padding: 0.5rem;
}

.btn-personals {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>
