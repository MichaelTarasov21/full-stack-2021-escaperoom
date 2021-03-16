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
        <h1>Settings</h1>
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
    </div>
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
  padding: .4rem;
}

#open-menu:hover{
  background: grey;
  transition: .2s;
}

/* The Modal (background) */
.modal { 
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

/* Modal Content */
.modal-content {
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 70%;
  z-index: 99;
}

/* The Close Button */
.close {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}
.menu-tab{
  background-color: #b0b6b3;
  border: none;
  color: black;
  padding: 15px 32px;
  width: 25%;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
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
