<template>
  <div>
    <section class="hero is-primary" style="margin-bottom: 2rem">
      <div
        class="hero-body"
        :style="{
          backgroundImage: `url(${collection.image.src})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }"
      >
        <div class="container has-text-centered">
          <h1 class="title">
            {{ collection.title }}
          </h1>
        </div>
      </div>
    </section>
    <div class="container">
      <div class="columns">
        <div class="column">
          <p
            class="subtitle"
            v-html="collection.descriptionHtml"
          />
        </div>
      </div>
      <hr class="hr" />
      <div class="columns">
        <div class="column">
          <h2 class="is-2">Products in this collection</h2>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <product-card-list
            :products="collection.products"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductCardList from '../../../components/ProductCardList'
export default {
  layout: 'noContainer',
  components: {
    ProductCardList
  },
  asyncData ({ $shopify, params }) {
    return $shopify.collection.fetchByHandle(params.handle).then((collection) => {
      return {
        collection
      }
    })
  }
}
</script>

<style scoped>
</style>
