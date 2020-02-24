<template>
  <div class="full-width">
    <h1>Welcome to my shop</h1>
  </div>
</template>

<script>
export default {
  async asyncData ({ $shopify }) {
    const products = await $shopify.product.fetchAll()
    return { products }
  },
  created () {
    this.$shopify.checkout.create().then((checkout) => {
      this.$store.commit('setCheckout', checkout)
    })
  }
}
</script>

<style>
  .full-width {
    width: 100%;
  }
</style>
