<template>
  <div class="holder">
    <h2>Distro - Newspaper</h2>
    <Launching />
    <FooterVue />
  </div>
</template>

<script>
import Launching from './components/Launching.vue'
import FooterVue from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Launching,
    FooterVue
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h2 {
  color: #E7F6F2;
}
</style>
