<template>
  <div class="columns">
    <div v-for="product in products" :key="product.id" class="column is-one-third">
      <div class="card">
        <div class="card-image">
          <figure class="image is-4by3">
            <img :src="product.images[0].src" :alt="product.images[0].altText">
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
              tag="router-link"
              :to="'/products/' + product.handle"
              type="is-primary"
            >
              See
            </b-button>
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
