<template>
  <div id="fail">
    <ul>
      <li>You Fool,</li>
      <li>You Moron</li>
    </ul>
    <button id="restart">Restart</button>
    <!-- this maybe should be a drop down instead or something -->
    <tab class="menu-tab" title="Profile"><Profile/></tab>
  </div>
</template>

<script>
import Tab from "./Tab"
import Profile from './Profile'
export default {
  name: "Fail",
  props: {
    msg: String
  },
  component: {
    Tab,
    Profile,
  }
}
</script>

<style scoped>
ul {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
}
li {
  list-style-type: none;
  display: inline-block;
  color: black;
  font-size: 5rem;
}
button {
  background-color: #b0b6b3;
  border: none;
  color: black;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}
#restart {
  margin-right: 30px;
}
#account {
  margin-left: 30px;
}
#fail {
  background-color: red;
  height: 100%;
  width: 100%;
  padding-top: 30px;
  position: absolute;
  top: 0%;
  left: 0%;
  right: 0%;
  bottom: 0%;
}
</style>
