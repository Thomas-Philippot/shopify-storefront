<template>
  <div class="app">
    <the-navbar />
    <section id="content-wrap" class="section">
      <nuxt />
    </section>
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
  #content-wrap {
    min-height: 100vh;
  }
</style>
