<template>
  <div class="columns is-multiline">
    <div v-for="product in products" :key="product.id" class="column is-half-tablet is-one-third-widescreen">
      <nuxt-link :to="`/products/${product.handle}`">
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3" v-if="product.images[0].src !== null">
              <img :src="product.images[0].src" :alt="product.images[0].altText">
            </figure>
            <figure v-else class="is-flex">
              <img
                src="/img/no-image.jpg"
                alt="image-not-found"
              >
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4">
                  {{ product.title }}
                </p>
                <p class="subtitle is-6">
                  {{ product.variants[0].price }} €
                </p>
              </div>
            </div>
            <div class="content">
              <b-button
                type="is-primary"
                icon-left="cart"
                @click="addToCart(product.variants[0].id, 1)"
              >
                Buy
              </b-button>
            </div>
          </div>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import cartMixins from '../mixins/cartMixins'

export default {
  name: 'ProductCardList',
  mixins: [cartMixins],
  props: {
    products: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
