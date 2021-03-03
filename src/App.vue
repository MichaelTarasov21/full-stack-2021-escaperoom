<template>
  <div id="app">
    <Timer @Gameover="Gameover" />
    <Fail v-if="lost" />
    <navigation />
    <div class="tab-bkg">
      <tabs>
        <tab title="Start Tab"><Start /></tab>
        <tab title="Success Tab"><Success /></tab>
      </tabs>
    </div>
  </div>
</template>

<script>
import Timer from "./components/Timer.vue";
import navigation from "./components/Navigation";
import Start from "./components/Start.vue";
import Fail from "./components/Fail.vue";
import Success from "./components/Success.vue";
import Tab from "./components/Tab.vue";
import Tabs from "./components/Tabs.vue";

export default {
  name: "App",
  components: {
    Timer,
    navigation,
    Start,
    Fail,
    Success,
    Tab,
    Tabs,
  },
  data() {
    return { lost:false };
  },
  methods: {
    Gameover: function() {
      this.lost = true;
    },
  },
};
</script>

<style>
.tab-bkg {
  width: 100%;
  height: 20rem;
  background-color: #f8f8f8;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
