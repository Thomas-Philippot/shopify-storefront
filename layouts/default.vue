<template>
  <div>
    <the-navbar />
    <div class="container" style="margin-top: 2em">
      <nuxt />
    </div>
  </div>
</template>

<style>
</style>
<script>
import TheNavbar from '../components/TheNavbar'
export default {
  components: { TheNavbar },
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
</style>
