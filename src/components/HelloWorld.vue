<template>
  <Timer></Timer>
</template>

<script>
import Timer from './Timer.vue'
export default {
  components: { Timer },
  methods: {
      Gameover: function(){
        alert('You are loser you have no')//replace me with code that shows game over screen
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
