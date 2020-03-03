<template>
  <div class="container">
    <div class="columns">
      <div class="column is-4">
        <b-carousel :indicator-inside="false">
          <b-carousel-item
            v-for="(image, index) in product.images"
            :key="index"
          >
            <span class="image">
              <img
                :src="image.src"
                style="max-width: 25rem"
                :alt="product.description"
              >
            </span>
          </b-carousel-item>
          <template slot="indicators" slot-scope="props">
            <span class="al image">
              <img
                :src="product.images[props.i].src"
                :alt="product.description"
                style="max-width: 5rem"
              >
            </span>
          </template>
        </b-carousel>
      </div>
      <div class="column">
        <div class="card">
          <div class="card-content">
            <div class="columns">
              <div class="column">
                <h1 class="title">
                  {{ product.title }}
                </h1>
              </div>
            </div>
            <div class="columns">
              <div class="column">
                <p
                  class="subtitle"
                  v-html="product.descriptionHtml"
                />
              </div>
            </div>
            <div class="columns">
              <div class="column">
                <p class="is-size-3">
                  {{ product.variants[0].price }} €
                </p>
              </div>
            </div>
            <div class="columns is-flex">
              <div class="column is-1">
                <p>Quantity</p>
              </div>
              <div class="column is-3">
                <b-numberinput
                  v-model.number="quantity"
                />
              </div>
              <div class="column is-7">
                <b-button
                  icon-left="cart"
                  class="mx-2"
                  @click="addToCart(product.variants[0].id, quantity)"
                >
                  Ajouter
                </b-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
      product: {},
      quantity: 1
    }
  },
  head () {
    return {
      title: this.$store.state.shop.name + ' | ' + this.product.title,
      meta: [
        { hid: 'description', name: 'description', content: this.product.description }
      ]
    }
  }
}
</script>

<style scoped>
  .is-active .al img {
    filter: grayscale(0%);
  }
  .al img {
    filter: grayscale(100%);
  }
  .columns.is-flex {
    align-items: center;
  }
</style>
