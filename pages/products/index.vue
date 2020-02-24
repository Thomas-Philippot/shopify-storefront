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
              Voir
            </b-button>
            <b-button
              type="is-primary"
              icon-left="cart"
              @click="addToCart(product)"
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
import cartMixins from '../../mixins/cartMixins'

export default {
  name: 'Index',
  mixins: [
    cartMixins
  ],
  computed: {
    products () {
      return this.$store.state.products
    }
  },
  async asyncData ({ $shopify, store }) {
    const products = await $shopify.product.fetchAll()
    // eslint-disable-next-line no-console
    console.log(products)
    store.commit('setProducts', products)
  }
}
</script>

<style scoped>
  .full-width {
    width: 100%;
  }
  .el-row {
    margin-bottom: 20px;
  &:last-child {
     margin-bottom: 0;
   }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .image {
    width: 100%;
    height: 15rem;
  }
  .description {
    margin-bottom: 1rem;
  }
</style>
