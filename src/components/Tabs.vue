<template lang="html">
  <div>
    <ul class='tabs__header'>
      <li v-for='(tab, index) in tabs'
        :key='tab.title'
        @click='selectTab(index)'
        :class='{"tab__selected": (index == selectedIndex)}'>
        {{ tab.title }}
      </li>
    </ul>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
    }
  },
  data () {
    return {
      selectedIndex: 0, 
      tabs: []         
    }
  },
  created () {
    this.tabs = this.$children
  },
  mounted () {
    this.selectTab(0)
  },
  methods: {
    selectTab (i) {
      this.selectedIndex = i

      // loop over all the tabs
      this.tabs.forEach((tab, index) => {
        tab.isActive = (index === i)
      })
    }
  }
}
</script>

<style lang="css">

  ul.tabs__header {
    padding: 0;
  }

  ul.tabs__header > li {
    margin: 0 1rem 0 1rem;
    display: inline-block;
    cursor: pointer;
  }

  ul.tabs__header > li.tab__selected {
    font-weight: bold;
    border-radius: 10px 10px 0 0;
    border-bottom: 3px solid black;
  }

  .tab {
    display: inline-block;
    color: black;
    width: 100%;
    /* padding: 20px; */
    border-radius: 10px;
  }

  .tabs .tab{
    background-color: #fff;
  }

  .tabs li {
    background-color: #ddd;
    color: #aaa;
  }

  .tabs li.tab__selected {
    background-color: #fff;
    color: #83FFB3;
  }

</style>