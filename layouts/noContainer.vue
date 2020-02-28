<template>
  <div class="app">
    <the-navbar />
    <div id="content-wrap">
      <nuxt />
    </div>
    <the-footer />
  </div>
</template>

<style>
</style>
<script>
import TheNavbar from '../components/TheNavbar'
import TheFooter from '../components/TheFooter'
export default {
  components: {
    TheFooter,
    TheNavbar
  }
}
</script>

<style>
  #content-wrap {
    min-height: 100vh;
  }
</style>
