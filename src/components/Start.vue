<template>
  <div id="start" v-if="!hidden">
    <section class="header">
      <h1 id="welcome"></h1>
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
      <button id="begin" @click="hide()">Begin</button>
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
      hide: function() {
      this.hidden = true
      this.$emit("Gamestarted");
      }
    },  
  data() {
    return {
      hidden: false,
    };
  },
  startScreen() {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        const welcome = document.querySelector("#welcome");
        welcome.innerHTML = `Welcome ${user.displayName}`;
      }
    });

  },

};
</script>


<style scoped>
#start {
  text-align: center;
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: 1;
  background-color: rgba(0, 20, 2, 0.9);
}
.header {
  background-color: white;
  color: black;
  margin: 3rem;
  padding: 3rem;
  border-radius: .75rem;
  max-width: 50rem;
}
@media (min-width: 800px) {
  .header {
    margin: 5rem auto;
  }
}

button {
  background-color: rgb(78, 255, 187);
  color: black;
  width: 25%;
  text-align: center;
  font-size: 1rem;
  cursor: pointer;
  border: solid 2pt  rgb(56, 99, 61);
}

button:hover {
  background-color: rgb(56, 99, 61);
  color: white;
}

#begin {
  padding: 0.5rem;
}

/* 
.btn-personals {
  display: flex;
  flex-direction: row;
  justify-content: center;
} */
</style>
