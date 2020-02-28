<template>
  <b-navbar>
    <template slot="brand">
      <b-navbar-item tag="nuxt-link" to="/">
        <img
          src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
          alt="Lightweight UI components for Vue.js based on Bulma"
        >
      </b-navbar-item>
    </template>
    <template slot="start">
      <b-navbar-item
        tag="nuxt-link"
        to="/products"
      >
        Products
      </b-navbar-item>
      <b-navbar-dropdown label="Blog">
        <b-navbar-item
          v-for="blog in blogs"
          :key="blog.id"
          tag="nuxt-link"
          :to="`/blog/${blog.node.handle}`"
        >
          {{ blog.node.title }}
        </b-navbar-item>
      </b-navbar-dropdown>
    </template>

    <template slot="end">
      <b-navbar-item tag="div">
        <div class="buttons">
          <nuxt-link to="/basket" class="button is-primary">
            <b-icon
              icon="cart"
            />
            <span>{{ cardCount }}</span>
          </nuxt-link>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {
  name: 'TheNavbar',
  computed: {
    cardCount () {
      return this.$store.state.checkout.lineItems.length
    },
    blogs () {
      return this.$store.state.blogs
    }
  },
  methods: {
  }
}
</script>

<style scoped>
</style>
