<template>
  <div class="holder">
    <a href="https://github.com/Distro-ir">
      <img src="./assets/Icons/Distro-min.svg" alt="Main Logo" width="34">
    </a>
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
</style>
