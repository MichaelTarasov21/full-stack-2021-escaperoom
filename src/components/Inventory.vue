<template>
  <div class="flex-row inventory">
    <div class="inventory-items">
      <div id="itemOne" class="inventory-item">
        <img
          class="item-img"
          src="https://img.icons8.com/dusk/75/000000/key.png"
        />
      </div>
      <div id="itemTwo" class="inventory-item">
        <img
          class="item-img"
          src="https://img.icons8.com/dusk/75/000000/key.png"
        />
      </div>
      <div id="itemThree" class="inventory-item">
        <img
          class="item-img"
          src="https://img.icons8.com/dusk/75/000000/key.png"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "inventory",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.inventory {
  position: fixed;
  bottom: 0;
  width: 100%;
}

.inventory-items {
  display: flex;
  justify-content: space-around;
}
.inventory-item {
  border: solid;
  padding: 1rem;
  border-color: gray;
  border-width: 0.5rem;
}
.item-img:hover {
  transform: scale(1.1);
  transition: 0.2s;
}
.flex-row {
  display: flex;
  justify-content: space-around;
}
</style>
