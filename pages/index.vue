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
  asyncData ({ app }) {
    return app.$axios({
      method: 'POST',
      data: {
        query: `query {
              shop {
                name,
                description,
                privacyPolicy {
                  handle
                },
                termsOfService {
                  handle
                },
                refundPolicy {
                  handle
                }
              },
              blogs(first: 10) {
                edges {
                    node {
                      handle,
                      title
                    }
                  }
              }
            }`
      }
    }).then((response) => {
      return {
        description: response.data.data.shop.description,
        shop: response.data.data.shop,
        blogs: response.data.data.blogs.edges
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
    this.$store.commit('setShop', this.shop)
  },
  beforeUpdate () {
    if (typeof this.$store.state.checkout.id === 'undefined') {
      this.$shopify.checkout.create().then((checkout) => {
        this.$store.commit('setCheckout', checkout)
      })
    }
  },
  head () {
    return {
      title: 'Home Page',
      meta: [
        { hid: 'description', name: 'description', content: this.description }
      ]
    }
  }
}
</script>

<style>
.card-image {
  height: 20rem;
}
</style>
