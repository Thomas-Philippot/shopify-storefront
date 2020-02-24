<template>
  <div>
    <h1>{{ product.title }}</h1>
    <p>{{ product.description }}</p>
    <b-button
      icon-left="cart"
      class="mx-2"
      @click="addToCart(product, checkout)"
    >
      Ajouter
    </b-button>
  </div>
</template>

<script>
import cartMixins from '../../../mixins/cartMixins'

export default {
  name: 'Index',
  mixins: [
    cartMixins
  ],
  async asyncData ({ params, $shopify }) {
    const product = await $shopify.product.fetchByHandle(params.handle)
    return { product }
  },
  data () {
    return {
      product: {}
    }
  }
}
</script>

<style scoped>

</style>
