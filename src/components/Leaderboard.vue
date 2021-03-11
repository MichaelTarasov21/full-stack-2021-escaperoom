<template>
<div>
    <modal v-if="lbModal" @close="showModal = false">
      <div class="leaderboard-content">
        <h1>Leaderboard</h1>
        <div class="leaderboard-info"></div>
        <button @click="$emit('close')">CLOSE</button>
      </div>
    </modal>
</div>
</template>

<script>

export default {
  //emits: ['lbClose'],
  name: 'Leaderboard',
  el: '#leaderboard',
  data(){
    return {
      ldModal: false
    }
  },
  /* methods: {
    function() {
      if (this.lbModal === false){
        this.$emit('lbClose')
      }
    },
  } */
};
</script>

<style>
.leaderboard-content{
  background-color: aquamarine;
}
</style>