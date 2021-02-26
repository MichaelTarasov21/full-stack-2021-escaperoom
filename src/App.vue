<template>
    <div class="tab-bkg">
      <tabs>
        <tab title="Start Tab"><Start msg="Start"/></tab>
        <tab title="Fail Tab"><Fail msg="Fail"/></tab>
        <tab title="Success Tab"><Success msg="Success"/></tab>
      </tabs>
</div>
</template>

<script>
import Start from './components/Start.vue'
import Fail from './components/Fail.vue'
import Success from './components/Success.vue'
import Tab from './Tab.vue'
import Tabs from './Tabs.vue'

export default {
  name: 'App',
  components: {
    Start,
    Fail,
    Success,
    Tab,
    Tabs
  }
}
</script>

<style scoped>
.tab-bkg {
  width: 100%;
  height: 20rem;
  background-color: #f8f8f8;
}
</style>