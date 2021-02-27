<template>
  <div id="fail">
    <ul>
      <li>You Fool,</li>
      <li>You Moron</li>
    </ul>
    <button id="restart">Restart</button>
    <button id="account">Account</button>
  </div>
</template>

<script>
export default {
  name: 'Fail',
  props: {
    msg: String
  }
}
</script>

<style scoped>
#fail {
  background-color: red;
  height: 20rem;
  width: 85%;
  padding-top: 30px;
}
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
</style>