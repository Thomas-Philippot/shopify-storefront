<template>
  <div>
    <h1>{{ product.title }}</h1>
    <p>{{ product.description }}</p>
  </div>
</template>

<script>
export default {
  name: 'Index',
  async asyncData ({ params, $shopify }) {
    const product = await $shopify.product.fetchByHandle(params.handle)
    return { product }
  }
}
</script>

<style scoped>

</style>
