<template>
  <div class="full-width">
    <div class="container">
      <div class="columns">
        <div class="column">
          <h1 class="is-size-2">My home page</h1>
          <p>ceci est la page d'acceuil, ce texte ne changera pas car c'est une boutique</p>
        </div>
      </div>
    </div>
    <div
      v-for="collection in collections"
      :key="collection.id"
      class="columns"
    >
      <div class="column">
        <section class="hero is-large is-primary">
          <div
            class="hero-body"
            :style="{
              backgroundImage: `url(${collection.image.src})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover'
            }"
          >
            <div class="container">
              <h1 class="title">
                {{ collection.title }}
              </h1>
              <h2 class="subtitle">
                {{ collection.description }}
              </h2>
              <nuxt-link :to="`/collection/${collection.handle}`" class="button is-primary">
                <span>See</span>
              </nuxt-link>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'noContainer',
  asyncData ({ app }) {
    return app.$axios.get('https://home-deco35.myshopify.com/admin/api/2020-01/blogs.json', {
      headers: {
        'X-Shopify-Access-Token': '99804a726edfba831c6671c3b66f413a'
      }
    }).then((response) => {
      return {
        blogs: response.data.blogs
      }
    })
  },
  data () {
    return {
      collections: []
    }
  },
  created () {
    this.$shopify.collection.fetchAllWithProducts().then((collections) => {
      this.collections = collections
    })
    this.$store.commit('setBlogs', this.blogs)
    // eslint-disable-next-line no-console
    console.log('Blog: ', this.blogs)
  },
  beforeUpdate () {
    if (typeof this.$store.state.checkout.id === 'undefined') {
      this.$shopify.checkout.create().then((checkout) => {
        this.$store.commit('setCheckout', checkout)
      })
    }
  }
}
</script>

<style>
  .full-width {
    width: 100%;
  }

  a {
    color: white;
  }
</style>
