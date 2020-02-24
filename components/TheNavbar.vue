<template>
  <b-navbar>
    <template slot="brand">
      <b-navbar-item tag="router-link" to="/">
        <img
          src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
          alt="Lightweight UI components for Vue.js based on Bulma"
        >
      </b-navbar-item>
    </template>
    <template slot="start">
      <b-navbar-item tag="router-link" to="/products">
        Products
      </b-navbar-item>
      <b-navbar-item tag="router-link" to="/blog">
        Blog
      </b-navbar-item>
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
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  computed: {
    cardCount () {
      return this.$store.state.cart.length
    }
  },
  methods: {
  }
}
</script>

<style scoped>
</style>
