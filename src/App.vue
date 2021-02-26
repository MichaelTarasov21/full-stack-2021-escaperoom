<template>
  <Timer @Gameover="Gameover"></Timer>
</template>

<script>
import Timer from './components/Timer.vue'

export default {
  name: 'App',
  components: {
    Timer
  },
  methods: {
      Gameover: function(){
        alert('You are loser')//replace me with code that shows game over screen
  }
}
}
</script>

<style></style>
