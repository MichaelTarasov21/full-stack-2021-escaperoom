<template>
  <div id="start" v-if="!hidden">
    <section class="header">
      <h1 id="welcome"></h1>
      <p>
        Welcome to &lt;insert cretive name here&gt; escape room. 
        <br>
        <br>
        Instructions: You can move around the screen using the arrow keys on your keyboards. 
        <br>
        Interact with items in the room by moving your character onto the item and pressing the "enter" key.
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
      this.sendstart();
      this.hidden = true
      this.$emit("Gamestarted");
      },
      sendstart: function () {
        console.log("I worked")
        firebase.database().ref().child("Users").child(firebase.auth().currentUser.uid).get().then(function(snapshot) {
        if (snapshot.exists()) {
          firebase.database().ref().child("Users").child(firebase.auth().currentUser.uid).update({
            FalseStart: true
          })
          console.log("You are dirty cheater")
        }
        else {
          firebase.database().ref().child("Users").child(firebase.auth().currentUser.uid).set({
            FalseStart: false
          })
          console.log("You are somewhat ok for now")
        }})
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
