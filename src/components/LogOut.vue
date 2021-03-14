<template>
  <div class="alert">
      <h1>Are you sure?</h1>
  </div>
</template>

<script>
export default {
  name: 'LogOut',
  props: {
    msg: String
  }
}
</script>

<style scoped>
.alert{
  background-color: rgb(202, 90, 62);
  opacity: 80%;
}
h1 {
    font-size: 5rem, bolder;
}
</style>