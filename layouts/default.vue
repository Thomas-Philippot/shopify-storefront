<template>
  <div class="app">
    <the-navbar />
    <div id="content-wrap" class="container" style="margin-top: 2em">
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
  },
  asyncData ({ $shopify }) {
    return $shopify.collection.fetchAllWithProducts().then((collections) => {
      return {
        collections
      }
    })
  }
}
</script>

<style>
  body {
    margin: 0;
  }
  #content-wrap {
    min-height: 100vh;
  }
</style>
