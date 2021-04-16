<template>
  <div>
    <div ref="mapItems"></div>
    <div class="inventory" ref="inventory"></div>

    <!-- <div id="mapItems">
      <div @click="push()" class="inventory-item"></div>
    </div>
    <div id="inventoryList" class="inventory">
      <div class="inventory-item"></div>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "inventory",

  // el: "#inventoryList, #mapItems, #app",
  data() {
    return {};
  },

  methods: {
    // displayInventory: function () {
    //   inventoryArray.forEach(function (item) {
    //     inventory.insertAdjacentHTML(
    //       "afterbegin",
    //       `<div class="inventory-item" id="${item.name}" >
    //       <img class="item-img" src="${item.img}" >
    //       <div class="hidden">${item.img}</div>
    //       <div>${item.name}</div>
    //     </div>`
    //     );
    //   });
    // },
  },

  mounted: function () {
    this.displayInventory();
    // this.addToInventory();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
