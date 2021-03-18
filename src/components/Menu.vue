<template>
  <div id="menu">
    <button id="open-menu" @click="showModal = true">
    <img src="https://img.icons8.com/dusk/64/000000/gear.png"/></button>
    <!-- The Modal -->
    <transition name="fade" appear>
      <div id="myModal" class="modal" v-if="showModal"> 
        <!-- Modal content -->
        <div class="modal-content">
          <span class="close" @click="showModal = false">&times;</span>
          <h1>SETTINGS</h1>
          <div class="flex-col menu-btns">
            <tabs>
              <tab class="menu-tab" title="Profile"><Profile/></tab>
              <tab class="menu-tab" title="Leaderboard"><Leaderboard/></tab>
              <tab class="menu-tab" title="Log Out"><LogOut/></tab> 
            </tabs>
            <!-- <button class="menu-btn">Profile</button>
            <button class="menu-btn">Leaderboard</button>
            // creates an alert confirming if user wants to log out 
            <button class="menu-btn">Log Out</button> -->
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import Tab from "./Tab"
import Tabs from "./Tabs"
import Leaderboard from './Leaderboard'
import Profile from './Profile'
import LogOut from './LogOut'
export default {
  name: 'Menu',
  components: {
    Tab,
    Tabs,
    Leaderboard,
    Profile,
    LogOut,
  }, 
  el: '#menu',
  data(){
    return {
      showModal: false,
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#open-menu {
  position: fixed;
  top: 0;
  right: 0;
  border: none;
  margin: 1.3rem;
  background: initial;
}

#open-menu:hover{
  /* background: grey; */
  transform: scale(1.1);
  transition: .2s;
}

/* The Modal (background) */
.modal { 
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0, 20, 2, 0.9);
}

/* Modal Content */
.modal-content {
  background-color: #fefefe;
  margin: 4rem;
  padding: 3rem;
  z-index: 3;
  border-radius: 1rem;
}

/* The Close Button */
.close {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}
.menu-tab{
  border: none;
  color: black;
  padding: 2rem;
  padding-top: 0;
  text-align: center;
  text-decoration: none;
  font-size: .8rem;
  cursor: pointer;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}

.flex-col{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

</style>
