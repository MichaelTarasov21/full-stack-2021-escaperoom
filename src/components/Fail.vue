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
}
ul {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
li {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: inline-block;
  color: black;
  font-size: bold;
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
</style>